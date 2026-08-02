import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function checkRateLimit(ip: string): boolean {
  const limit = 1;
  const windowMs = 10 * 60 * 1000; // Cada 10 minutos
  const now = Date.now();
  const windowData = rateLimitMap.get(ip);

  if (!windowData) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - windowData.lastReset > windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (windowData.count >= limit) {
    return false;
  }

  windowData.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Has enviado demasiados mensajes. Por favor, intenta de nuevo en 10 minutos.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { nombre, correo, mensaje, recaptchaToken } = body;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 },
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Falta el token de seguridad reCAPTCHA" },
        { status: 400 },
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "Validación de seguridad fallida (Bots no permitidos)" },
        { status: 400 },
      );
    }

    const fecha = new Date().toLocaleDateString("es-ES", {
      timeZone: "America/Lima",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const baseStyles =
      "font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e0e0e0;";
    const monoStyles =
      "font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; letter-spacing: 0.1em;";

    const adminHtmlEmail = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mensaje [Tumy.ai]</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #050505; ${baseStyles}">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 4px;">
            <tr>
              <td style="padding: 40px; border-bottom: 1px solid #1a1a1a;">
                <p style="margin: 0; color: #666; font-size: 11px; text-transform: uppercase; ${monoStyles}">[01] NUEVO CONTACTO</p>
                <h1 style="color: #ffffff; margin: 16px 0 0 0; font-size: 20px; font-weight: 400; letter-spacing: -0.02em;">Mensaje Recibido</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <p style="margin: 0; font-size: 11px; color: #666; text-transform: uppercase; ${monoStyles}">REMITENTE</p>
                      <p style="margin: 8px 0 0 0; font-size: 15px; color: #e0e0e0;">${nombre}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <p style="margin: 0; font-size: 11px; color: #666; text-transform: uppercase; ${monoStyles}">CORREO</p>
                      <p style="margin: 8px 0 0 0; font-size: 15px;"><a href="mailto:${correo}" style="color: #e0e0e0; text-decoration: none;">${correo}</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 32px;">
                      <p style="margin: 0; font-size: 11px; color: #666; text-transform: uppercase; ${monoStyles}">FECHA</p>
                      <p style="margin: 8px 0 0 0; font-size: 15px; color: #e0e0e0; ${monoStyles}">${fecha}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #111111; padding: 24px; border: 1px solid #1a1a1a; border-radius: 4px;">
                      <p style="margin: 0; font-size: 11px; color: #666; text-transform: uppercase; margin-bottom: 12px; ${monoStyles}">MENSAJE</p>
                      <p style="margin: 0; line-height: 1.6; font-size: 14px; color: #cccccc; white-space: pre-wrap;">${mensaje}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 40px; border-top: 1px solid #1a1a1a;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <p style="margin: 0; color: #444; font-size: 10px; ${monoStyles}">SISTEMA TUMY.AI // ${new Date().getFullYear()}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `;

    const userHtmlEmail = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación [Tumy.ai]</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #050505; ${baseStyles}">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 4px;">
            <tr>
              <td style="padding: 40px; border-bottom: 1px solid #1a1a1a;">
                <p style="margin: 0; color: #666; font-size: 11px; text-transform: uppercase; ${monoStyles}">[02] CONFIRMACIÓN</p>
                <h1 style="color: #ffffff; margin: 16px 0 0 0; font-size: 20px; font-weight: 400; letter-spacing: -0.02em;">Hemos recibido tu mensaje</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <p style="margin: 0 0 24px 0; font-size: 15px; color: #e0e0e0; line-height: 1.6;">Hola ${nombre},</p>
                <p style="margin: 0 0 32px 0; font-size: 15px; color: #aaaaaa; line-height: 1.6;">Gracias por contactar con Tumy.ai. Hemos registrado tu solicitud y nuestro equipo se pondrá en contacto contigo a la brevedad posible.</p>
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #111111; padding: 24px; border: 1px solid #1a1a1a; border-radius: 4px;">
                  <tr>
                    <td>
                      <p style="margin: 0 0 12px 0; font-size: 11px; color: #666; text-transform: uppercase; ${monoStyles}">REGISTRO DE ENVÍO</p>
                      <p style="margin: 0 0 8px 0; font-size: 13px; color: #888; ${monoStyles}">TS: ${fecha}</p>
                      <p style="margin: 16px 0 0 0; line-height: 1.6; font-size: 14px; color: #cccccc; white-space: pre-wrap;">${mensaje}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 40px; border-top: 1px solid #1a1a1a;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <p style="margin: 0; color: #444; font-size: 10px; ${monoStyles}">SISTEMA TUMY.AI // ${new Date().getFullYear()}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `;

    const adminMailOptions = {
      from: `"Tumy.ai" <${process.env.GMAIL_USER}>`,
      to: "tumy.ai.pe@gmail.com",
      subject: `[NUEVO CONTACTO] ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nFecha: ${fecha}\n\nMensaje:\n${mensaje}\n\nSISTEMA TUMY.AI`,
      html: adminHtmlEmail,
    };

    const userMailOptions = {
      from: `"Tumy.ai" <${process.env.GMAIL_USER}>`,
      to: correo,
      subject: `Confirmación de contacto - Tumy.ai`,
      text: `Hola ${nombre},\n\nHemos recibido tu mensaje y nos pondremos en contacto contigo pronto.\n\nSISTEMA TUMY.AI`,
      html: userHtmlEmail,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Correos enviados correctamente",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al enviar los correos" },
      { status: 500 },
    );
  }
}
