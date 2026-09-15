import { NextRequest, NextResponse } from "next/server";
import { namesData } from "@/lib/data/names";
import { regionsData } from "@/lib/data/regions";
import { categoriesData } from "@/lib/data/categories";
import { pagesData } from "@/lib/data/pages";

export type SearchResult = {
  title: string;
  subtitle?: string;
  href: string;
  type: "Name" | "Region" | "Category" | "Page";
};

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();

  if (!q) {
    return NextResponse.json([]);
  }

  const results: SearchResult[] = [];

  // Search Names
  for (const n of namesData) {
    if (
      n.name.toLowerCase().includes(q) ||
      n.meaning.toLowerCase().includes(q) ||
      n.region.toLowerCase().includes(q)
    ) {
      results.push({
        title: n.name,
        subtitle: `${n.meaning} · ${n.region}`,
        href: `/name/${n.name.toLowerCase()}`,
        type: "Name",
      });
    }
  }

  // Search Regions
  for (const r of regionsData) {
    if (
      r.name.toLowerCase().includes(q) ||
      r.slug.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q)
    ) {
      results.push({
        title: r.name,
        subtitle: "Region",
        href: "/#regions",
        type: "Region",
      });
    }
  }

  // Search Categories
  for (const c of categoriesData) {
    if (
      c.name.toLowerCase().includes(q) ||
      c.slug.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    ) {
      results.push({
        title: c.name,
        subtitle: "Category",
        href: "/#categories",
        type: "Category",
      });
    }
  }

  // Search Pages
  for (const p of pagesData) {
    if (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    ) {
      if (p.href === "/" || p.href.startsWith("/#")) {
        results.push({
          title: p.title,
          subtitle: "Page",
          href: p.href,
          type: "Page",
        });
      }
    }
  }

  // Limit results (e.g., top 10) so dropdown doesn't overflow
  return NextResponse.json(results.slice(0, 10));
}