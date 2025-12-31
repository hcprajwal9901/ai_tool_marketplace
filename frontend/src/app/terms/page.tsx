import { FileText } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <div className="text-center mb-16">
                    <FileText className="mx-auto h-12 w-12 text-primary-600" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
                    <p className="mt-4 text-base leading-7 text-gray-600">Last updated: December 31, 2025</p>
                </div>

                <div className="prose prose-lg mx-auto text-gray-600">
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf
                        of an entity ("you") and AI Tool Marketplace ("we," "us," or "our"), concerning your access to and use of
                        the website. By accessing the site, you acknowledge that you have read, understood, and agree to be bound
                        by all of these Terms of Service.
                    </p>
                    <p>
                        IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE
                        AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality,
                        software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
                        and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or
                        licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h2>3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul>
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>

                    <h2>4. User Registration</h2>
                    <p>
                        You may be required to register with the Site. You agree to keep your password confidential and will be responsible
                        for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select
                        if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                    </p>

                    <h2>5. Submissions</h2>
                    <p>
                        You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding
                        the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall
                        own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use
                        and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment
                        or compensation to you.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct,
                        indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue,
                        loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility
                        of such damages.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site,
                        please contact us at: <a href="mailto:support@ai-marketplace.com">support@ai-marketplace.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
