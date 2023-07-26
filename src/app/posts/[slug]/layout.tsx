import Header from "@/components/Header";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="mx-auto max-w-3xl max-sm:max-w-sm max-lg:max-w-lg">
        <Header />
        <div className="pt-8">{children}</div>
      </div>
    </main>
  );
}
