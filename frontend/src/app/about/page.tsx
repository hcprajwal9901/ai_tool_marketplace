import { ArrowRight, Globe, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                                About Us
                            </span>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Democratizing access to AI tools
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We are building the most comprehensive and trusted directory of AI tools.
                            Our mission is to help creators, developers, and businesses find the perfect AI solutions
                            to supercharge their productivity.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/categories"
                                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                            >
                                Browse Tools
                            </Link>
                            <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                                Contact Us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">Tools Listed</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">1,000+</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">Monthly Users</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">50k+</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">Categories</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">40+</dd>
                    </div>
                </dl>
            </div>

            {/* Values Section */}
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-32">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We review every tool to ensure quality and safety for our users.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div>
                        <dt className="font-semibold text-gray-900 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary-600" />
                            Trusted & Verified
                        </dt>
                        <dd className="mt-1 text-gray-600">
                            We verify every tool submitted to our platform to ensure it meets our quality and security standards.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary-600" />
                            Up to Date
                        </dt>
                        <dd className="mt-1 text-gray-600">
                            The AI landscape moves fast. We automatically track updates and new releases for all listed tools.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-900 flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary-600" />
                            Community Driven
                        </dt>
                        <dd className="mt-1 text-gray-600">
                            Real reviews from real users help you decide which tools are actually worth your time and money.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
