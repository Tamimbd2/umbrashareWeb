
import React from 'react';

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">{children}</a>
    </li>
);

const SocialIcon: React.FC<{href: string, children: React.ReactNode}> = ({href, children}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 lg:col-span-1">
                 <h4 className="font-bold text-lg mb-4">UmbraShare</h4>
                 <ul className="space-y-2">
                    <FooterLink href="#">Home</FooterLink>
                    <FooterLink href="#">Our story</FooterLink>
                    <FooterLink href="#">Sustainability</FooterLink>
                    <FooterLink href="#">Work with us</FooterLink>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-lg mb-4">Our solutions</h4>
                <ul className="space-y-2">
                    <FooterLink href="#">Media & sponsorships</FooterLink>
                    <FooterLink href="#">For buildings</FooterLink>
                    <FooterLink href="#">For companies</FooterLink>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4">Talk with us</h4>
                <ul className="space-y-2">
                     <li>
                        <a href="mailto:contact@umbrashare.com" className="text-gray-400 hover:text-white transition-colors text-sm">contact@umbrashare.com</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-2 md:col-span-4 lg:col-span-2 flex lg:justify-end items-start space-x-4">
                 <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </SocialIcon>
                 <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                 </SocialIcon>
                 <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.698c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>
                 </SocialIcon>
                 <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.214 3.793 4.649-.69.188-1.452.23-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.028-1.455-.086 2.684 1.714 5.875 2.712 9.342 2.712 11.211 0 17.348-9.289 17.348-17.348 0-.265-.006-.528-.018-.79A12.444 12.444 0 0024 4.557z" /></svg>
                 </SocialIcon>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-center">
            <div className="text-3xl font-black tracking-tight mb-4 md:mb-0">
                UmbraShare
            </div>
            <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} UmbraShare Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
