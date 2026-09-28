import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import ImageReveal from "@/components/animations/ImageReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Nexus Nerve Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless sequential browsing
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="w-full pt-32 pb-24 px-6 md:px-10 lg:px-12 text-current">
      {/* Top back navigation */}
      <div className="mb-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 metadata-tag text-current/60 hover:text-[#57cccc] transition-colors"
          data-cursor="BACK"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Hero Title & Client Meta */}
      <div className="border-b border-current/15 pb-12 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="metadata-tag text-[#57cccc] font-bold">
            [{project.id} // CASE STUDY]
          </span>
          <span className="metadata-tag text-current/50">{project.year}</span>
        </div>

        <h1 className="display-section font-black uppercase tracking-tight text-current mb-8">
          {project.title}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-current/10 text-xs font-mono">
          <div>
            <span className="text-current/40 block mb-1">CLIENT</span>
            <span className="font-bold uppercase">{project.client}</span>
          </div>
          <div>
            <span className="text-current/40 block mb-1">DISCIPLINE</span>
            <span className="font-bold uppercase">{project.category}</span>
          </div>
          <div>
            <span className="text-current/40 block mb-1">YEAR</span>
            <span className="font-bold uppercase">{project.year}</span>
          </div>
          <div>
            <span className="text-current/40 block mb-1">LOCATION</span>
            <span className="font-bold uppercase">GLOBAL / REMOTE</span>
          </div>
        </div>
      </div>

      {/* Main Hero Visual */}
      <div className="w-full mb-16 md:mb-24">
        <ImageReveal className="aspect-[16/9] md:aspect-[21/9] w-full" cursorText="GALLERY">
          <div className="relative h-full w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </ImageReveal>
      </div>

      {/* Narrative & Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-current/15">
        <div className="lg:col-span-4">
          <span className="metadata-tag text-[#57cccc] block mb-4">
            // OVERVIEW & CONTEXT
          </span>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-current/90">
            {project.overview}
          </p>

          <div className="mt-8 pt-8 border-t border-current/10">
            <h4 className="metadata-tag text-current/40 mb-4">DELIVERABLES</h4>
            <ul className="space-y-2">
              {project.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="text-xs font-mono uppercase tracking-wider text-current/70 flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-[#57cccc]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          <div>
            <span className="metadata-tag text-current/40 block mb-3">
              THE CHALLENGE
            </span>
            <p className="text-base md:text-lg text-current/80 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <span className="metadata-tag text-current/40 block mb-3">
              THE STRATEGY & SOLUTION
            </span>
            <p className="text-base md:text-lg text-current/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Project Supporting Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="py-20 md:py-32 border-b border-current/15">
          <div className="flex items-center justify-between mb-12">
            <span className="metadata-tag text-[#57cccc]">
              // VISUAL DOCUMENTATION
            </span>
            <span className="metadata-tag text-current/40">
              {project.gallery.length} ARTIFACTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {project.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className={idx % 3 === 0 ? "md:col-span-2" : "md:col-span-1"}
              >
                <ImageReveal
                  className={idx % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}
                  cursorText="EXPAND"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={imgUrl}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ImageReveal>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Project Footer */}
      <div className="pt-20 md:pt-32">
        <span className="metadata-tag text-[#57cccc] block mb-4">
          NEXT CASE STUDY
        </span>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-mono uppercase text-current/50 mb-2">
              {nextProject.category} — {nextProject.year}
            </p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="display-section font-black uppercase tracking-tight hover:text-[#57cccc] transition-colors"
              data-cursor="NEXT"
            >
              {nextProject.title}
            </Link>
          </div>

          <MagneticButton href={`/work/${nextProject.slug}`} size="lg" withArrow>
            VIEW NEXT PROJECT
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}
