const categoryColors:Record<'seo'|'www'|'news'|'ppc', string> = {
    seo:"bg-green-100",
    www:"bg-purple-100",
    news:"bg-red-100",
    ppc:"bg-blue-100"
}

export default function getCategoryColor(category:'seo'|'www'|'news'|'ppc'):string{
    return categoryColors[category] ?? "bg-slate-300"
}