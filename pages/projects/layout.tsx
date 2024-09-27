// app/pages/projects/layout.tsx
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>/* Your CV-specific navigation */</nav>
      {children}
    </section>
  );
}
