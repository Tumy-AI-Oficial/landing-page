import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/cookies',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
