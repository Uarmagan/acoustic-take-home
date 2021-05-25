export default function Layout({ children }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {children}
    </main>
  );
}
