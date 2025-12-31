'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import api from '@/lib/api';
import { Category, ToolListItem } from '@/types';
import ToolCard from '@/components/tools/ToolCard';
import { Search } from 'lucide-react';

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [category, setCategory] = useState<Category | null>(null);
    const [tools, setTools] = useState<ToolListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                // Fetch category by slug
                const catData = await api.getCategoryBySlug(slug);
                setCategory(catData);

                if (catData) {
                    // Fetch tools for this category
                    const toolsData = await api.getCategoryTools(catData.id);
                    setTools(toolsData.items);
                }
            } catch (err) {
                console.error('Failed to load category data', err);
                setError('Category not found or failed to load.');
            } finally {
                setIsLoading(false);
            }
        }

        if (slug) {
            fetchData();
        }
    }, [slug]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (error || !category) {
        return (
            <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Category Not Found</h1>
                    <p className="mt-4 text-gray-500">{error || "The category you're looking for doesn't exist."}</p>
                    <div className="mt-8">
                        <a href="/categories" className="text-primary-600 hover:text-primary-500 font-medium">
                            &larr; Browse all categories
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {category.name} AI Tools
                        </h1>
                        <p className="mt-4 text-lg text-gray-500">
                            {category.description || `Discover the best AI tools for ${category.name}. Hand-picked and verified.`}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {tools.length} {tools.length === 1 ? 'Tool' : 'Tools'}
                    </h2>
                    {/* Use client-side search or filters here if needed */}
                </div>

                {tools.length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {tools.map((tool) => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                        <Search className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-semibold text-gray-900">No tools found</h3>
                        <p className="mt-1 text-sm text-gray-500">We haven't added any tools to this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
