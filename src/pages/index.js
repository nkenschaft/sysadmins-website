import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Obfuscate from 'react-obfuscate';

import Layout from '../components/layout';
import SEO from '../components/seo';

import data from '../data/index.yml';

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={[`sysadmins`, `home`, `index`, `about`]} title="Home" />

            <section className="p-12 transition">
                <ReactMarkdown className="link mb-6" source={data.summary} />
                {data.understudy ? (
                    <Link to="/understudy">
                        <a className="inline-block bg-blue text-white p-4 uppercase shadow hover:shadow-lg">
                            Understudy
                        </a>
                    </Link>
                ) : null}
            </section>

            <section className="px-12 my-6">
                <h1 className="text-3xl uppercase mb-6">Services</h1>
                <div className="flex flex-wrap -mx-3">
                    {data.services.map(service => (
                        <div className="cursor-pointer w-full md:w-1/3 px-3 mb-6">
                            <a
                                className="block border-2 hover:border-blue border-gray-300 shadow p-6 h-full transition"
                                href={service.link}>
                                <h3 className="font-bold text-2xl mb-3">{service.name}</h3>
                                <ReactMarkdown source={service.summary} />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-12 my-6">
                <h1 className="text-3xl uppercase mb-6">Members</h1>
                <div className="flex flex-wrap -mx-3">
                    {data.members.map(member => (
                        <div className="cursor-pointer w-full md:w-1/4 px-3 mb-6">
                            <div className="block border-2 hover:border-blue border-gray-300 shadow p-6 h-full transition">
                                <h3 className="font-bold text-2xl mb-1">{member.name}</h3>
                                <h4 className="italic mb-3 text-gray-700">({member.year})</h4>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-6 p-12 bg-blue text-white">
                <h1 className="text-3xl uppercase mb-6">Contact</h1>
                <table className="table-auto w-full border-collapse border border-gray-500">
                    <thead>
                        <tr className="text-left font-bold text-xl">
                            <th className="border border-gray-500 px-4 py-2">Title</th>
                            <th className="border border-gray-500 px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.contact.map(contactGroup => (
                            <tr>
                                <td className="border border-gray-500 px-4 py-2">{contactGroup.title}</td>
                                <td className="border border-gray-500 px-4 py-2">
                                    <Obfuscate email={contactGroup.email} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Layout>
    );
}

export default IndexPage;
