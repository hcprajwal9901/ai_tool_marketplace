import { Shield } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <div className="text-center mb-16">
                    <Shield className="mx-auto h-12 w-12 text-primary-600" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
                    <p className="mt-4 text-base leading-7 text-gray-600">Last updated: December 31, 2025</p>
                </div>

                <div className="prose prose-lg mx-auto text-gray-600">
                    <h2>Introduction</h2>
                    <p>
                        At AI Tool Marketplace ("we", "us", or "our"), respecting your privacy is one of our top priorities.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>

                    <h2>Information We Collect</h2>
                    <h3>Personal Data</h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you register on the website,
                        submit a tool, subscribe to our newsletter, or contact us. This may include your name, email address,
                        and other contact details.
                    </p>

                    <h3>Derivative Data</h3>
                    <p>
                        Information our servers automatically collect when you access the site, such as your IP address, browser type,
                        operating system, access times, and the pages you have viewed directly before and after accessing the site.
                    </p>

                    <h2>How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Create and manage your account.</li>
                        <li>Process your tool submissions and reviews.</li>
                        <li>Send you emails regarding your account or order.</li>
                        <li>Enable user-to-user communications.</li>
                        <li>Increase the efficiency and operation of the website.</li>
                        <li>Monitor and analyze usage and trends to improve your experience.</li>
                    </ul>

                    <h2>Disclosure of Your Information</h2>
                    <p>
                        We may share information we have collected about you in certain situations. Your information may be disclosed:
                    </p>
                    <ul>
                        <li>By Law or to Protect Rights</li>
                        <li>Third-Party Service Providers (e.g., hosting, analytics)</li>
                        <li>Business Transfers</li>
                    </ul>

                    <h2>Security of Your Information</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information.
                        While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                        that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
                        can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@ai-marketplace.com">support@ai-marketplace.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
