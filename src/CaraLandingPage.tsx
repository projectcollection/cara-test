import type { Section as SectionType } from "./Section";
import type { Profile as ProfileType} from "./Profile";

import {Section} from "./Section";
import {Profile} from "./Profile";

const sections: SectionType[] = [
  {
    image: {
        url: "https://s3-alpha-sig.figma.com/img/4ee0/d66f/ca3575a835a48df9e091360606264a6e?Expires=1674432000&Signature=M1GeUNLi2wNDuQb65a1kvJrnLGNWUlPkg3LThs1xVRiisrcidq5gkR5zvKEPntJgeyQ226KzAnEwcNOTPo5n3sEguK97DfSGiMTL~MgXQO5vesWm3xDqbNn57-qVqmh~~cOqPC2vEyt~UC0S5~IS4DLRc26iakLjmTjp4YBZmS-dhL5vFhE2S14pCeKhZHKvxvcQbogqgCJCm~CqnV6zWcD70s~gJF0uzHYCV-uMqU0AmbL8Mx5rqa2r0O-wffBb3tXjuoq7IXYSvN~f-pHRSz3rLmEJ9YJRXKc9EHQOlCQ6LDog3eXmxF4vq4Ntprz3S1EWlSMkhrTbXP3KUqznyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        artist: "Tobias Kwan"
    }
  },
  {
    image: {
        url: "https://s3-alpha-sig.figma.com/img/bf0a/4170/a48bd20a0bfb54747c40757e233fdb55?Expires=1674432000&Signature=D1WKjcmVWtgrJh0U2cxKRMiGhB1Jo1ApVbquFIIz-10vB0Ig6~5mlaKwC1u3~vh96XpKqO209POglauiv5Mz5v8MQxQYTHCNBkIaZNlSpNj4E51hNTumx8EnStGiKRgKN7fGNav76FqIwwUzV1kE0NhSN-iurbrc791fTvhZLGJnLOdHYNKPYh79HpBBSRnml3fMxFx31TV~akPFbpCU6V0yCuetl7gwNu2sYaIzqLjfFCjWDS3ia5Sq6pZCN612eLmj5JC5GLhG2kr-6nMSWH1HKrDMRo0lBiKD43EoNo2WjzaRLeDxkfBUBW9mUw3-pkmQ133G6MvxLhd8hXo5uA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        artist: "Kuang Hong"
    }
  },
  {
    image: {
        url: "https://s3-alpha-sig.figma.com/img/ea39/b29e/0050ecb060600eba38a867663309c444?Expires=1674432000&Signature=ej3w7dBci3vEEwyv7Z~UtArZmaWJiz0ajtqztQ-yKOsM22e~rvHQtiajns1hwE~fh5pACL6GfW1qOY8g8nfvUJiwtZ2zZ7hdSg23xBmEbgQp~YqI9dO3LfT2qilee38lRYoPPG2TFRs7ysh5uxJFPwSq-T74hqVvdgzkdTiapn1fr8tceo1lrzbzP~-FalI~s8QhCu6eotS7pLjLERe89SWHnxyXXjoaCOSG~b30DppfQU2HrH4cWjXNYaNujJdFv4EdFpkCIoWraGfd0e9v4QmSXnVCdrm-A8mVnJd3pLzq2e4TfDBW1p4TjIIP74~3yxY~mc4839g3NfZrl72v5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        artist: "Tobias Kwan"
    }
  },
  {
    image: {
        url: "https://s3-alpha-sig.figma.com/img/f84b/0344/b2d1f0eb8dcc746c4fdbc41d54dce63b?Expires=1674432000&Signature=qrIlJ6ouEmSPvR7zt~Xf0Hr0ce~SYYvA8szHcNlZvEasYJ8hWUAEh2kgDoHj-UnmMkP1Nc7otcdiOzy5AiflCoIWDLqc2A-SRXSaLPr39755OLLEeKnvPNHMupcq3~MEI8-KabsNAUNCVl-S-b2YxD4QoBQRR1Bq3Ytn04bPvCkewCBL3o1i4tfHhKWB3vbBO0~g8PkGkstFCmQnoRFkId8z2kKHN7Tc9OGUesQM2QaG7x4ufZo51hIkMs5kYGPlzuuzSqJDUDCs8Ns6bgF8p4X8E1zAya6abrQCYjqPjLwB6hyiIVLT3hKCRtiEJhS43NJZv8hTypcnaLR11GxnSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        artist: "Marc Simonetti"
    }
  },
  {
    image: {
        url: "https://s3-alpha-sig.figma.com/img/fa05/c987/1a8694ce21320813154b475a1185114d?Expires=1674432000&Signature=f8U2Nz4f03PibmdRE~KdwchLq5h84BmhOLBzftJkZEOSugQ3QSs1G2miZ8roGJKHzEfjlzwYUbqyabtQokYTsKDM6GHzUoZtJkJzl7wlTSBzyjg8P44blmxIGEcRDB18n7sChPX2lEOBZ5X9NvbZ1QuahEck7KRneHhYyv1Q~JcAzE0Dy9hYtJv1ltnTooRzPT6L~lNAtz-w6qen1POc6JjF5JsLyWhIfbF6OOsI1aB7Wr~Wbz6yvZpUaJz8p2UkACf5IeOwWJzJOGqWme~PxaRYEj7ttQkUIxRIPakEyxycoRp3kjT~ptzVDqopR1vgIAFbPh9DjfD2QKbph87A5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    }
  },
];

const profiles: ProfileType[] = [
    {
        name: "Jingna Zhang",
        title: "Founder, Designer",
        img: "https://s3-alpha-sig.figma.com/img/cb11/3263/fc2c2b67119280bd740038e63f5c553a?Expires=1674432000&Signature=ZgmA9332KUPn~HxnTzRCMKlrCzcASZMdqYMtmTmlanfBIayC4A5qZLBKNmXSH4lJuTXMUhzm~WZE-1fXXXWRH7E-vaqwOjxON1uaR6Sh0eWB2t9J9AZzeNipCaazUFSf-9rKB25qsGBvrGaT3OT2YCvZ9h5wSqlMGZkwEakVXLevn973CH37EZLl6IrebFzgfo4yQU~ugwigzofxlnIMwcZ3ICDliBsNXQLbx8U1jFw6xIgjFVbJqmf-RM~DXrJCgNyG4R8a1zLAevjdtPgtft21zmV4y02O9yFN4eN8Kk2NjQ91~djnivmzMr6epp4tyS9TrM5vCwuzzc~t0TTusw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        details: [
            "As a member of digital art communities for two decades and an early CGHUB alum. I believe artists should be treated fairly, and communities need a place where they can feel respected.",
            "If major companies won’t take a stand to protect us, then we will build a home for ourselves."
        ]
    },
    {
        name: "Katie Borisov",
        title: "Senior Production Engineer",
        img: "https://s3-alpha-sig.figma.com/img/62de/877d/7dcb61513a498b879aed2bf68fb048cc?Expires=1674432000&Signature=gLvFuzo1io~ggmgGqUzkSbCSrEVd1QUb3sq5GXd6Ml~oHaOLXZDXLJMSwUyt5R7Zsm4c4OSBZMgAyCk7paeRNRGvuuvHHAVl07NsReB2h2o93eOQpulBYm5D58j6ORwZ-RfBxC3AkvMwm4~QzH8jE8fLVYJOiAZSw8U3CcXMbnKO1bSFa9-OZmf8keyOAoYxOFpzhO3~FaWsM83j91joCGOxiVSAtjWQT5h0MEOP2jnkF-Y83u30F9mug0ic0d9G91~VnoxqkAbX8PT5sWtvZna-DgI1wRLhV~p36zYJUb8VFFXB~psViR-0-zgIP4Z~xZHa9zRpQ7YfwTN8X9d8bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        details: [
            "I worked with Jingna’s esports team 10 years ago and am happy to be reunited a decade later.",
            "I’m inspired by the passion and work of artists and truly believe that Cara will help with what they are going through. I’m invested in making this a place for everyone."
        ]
    },
    {
        name: "Jacob Robson-Tull",
        title: "PhD Student, Full Stack Engineer",
        img: "https://s3-alpha-sig.figma.com/img/5a5b/eb28/d13d6973d9bb5823b6461b1eda8c9418?Expires=1674432000&Signature=FrBZEsflMmIKcK1BLIw4xt-GpnPvqu3TBG4SZrsKHESypGqlIzFWQnUEtZPRrOvm2mXlCGc6oOspxmqRby97if7Nqlon0TLLmsFM8Cx0A9mq36ol0ksbLn8gfOL0LISI0l07C9yXw1McjIDK1C1EZfodhCXVeFsU91Y1o3f9zraVu3ry1e9By8QysyegKl2irYsXH8fJCpRSn3PkoKoKx4XFqPz4wDTEtIOS1qQjbsW0XjFJmdyBq~-FnwLQPhQlrOuI9sBU6ScRbwG8NJvJLaq~cWl6jBdIbHWfyjb2YtFcIBVAdli77x9pCRIseUaCuVdro-RclbDDTI1H5p17iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        details: [
            "I was an active member of DeviantArt many years ago, and I completely understand how necessary an online art community is.",
            "I believe in Cara’s mission because it is necessary for artists to have an online space where their content is theirs and respected."
        ]
    },
]

function LandingPage() {
  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
        <nav className="flex flex-col md:flex-row justify-between items-center p-10 md:ml-[10vw]">
            <h1 className="text-2xl font-bold text-center md:text-left underline">Cara</h1>
            <div className="text-sm">
                <a href="#" className="m-3">Home</a>
                <a href="#" className="m-3">Explore</a>
                <a href="#" className="m-3">FAQs</a>
                <a>|</a>
                <a href="#" className="m-3">Sign Up</a>
                <a href="#" className="m-3">Log In</a>
            </div>
        </nav>
        <Section image={sections[0].image} kissBorder={false}>
            <div>
                <h2 className="text-5xl text-center font-bold mb-5">
                    About Cara
                </h2>
                <p className="my-3">
                    Cara is a social media and portfolio platform for artists in the
                    entertainment industry—a home where professional portfolios and
                    communities coexist, and creators’ rights are respected.
                </p>
                <p className="my-3">
                    With over 5000 signups on our waitlist within a week, we’ve heard
                    the community’s wish for a platform that’s made by artists, for artists.
                </p>
                <p className="my-3">
                    The platform is being built by a group of passionate volunteers
                    and led by CGHUB alum <a className="underline" href="https://www.zhangjingna.com/">Jingna Zhang</a>.
                </p>
            </div>
        </Section>

        <Section image={sections[1].image} flip={true}>
            <div className="sectionContent">
            <h2 className="text-4xl font-bold">
                Why a New Platform?
            </h2>
            <p className="my-3">
                AI art’s popularity has exploded in recent months. And while it
                can be an incredible tool, we cannot ignore the fact that
                companies are using datasets trained on copyrighted work without
                creators' consent.
            </p>
            <p className="my-3">
                We are disappointed by major art platforms’ decisions to not make
                a stance and support artists, who simply wanted to be treated
                fairly and have their rights respected.
            </p>
            <p className="my-3">
                We see the courage of all creatives who deleted their accounts
                on these platforms to make a stand, but also know that many will
                still need a place to showcase their work.
            </p>

            <p className="my-3">
                We want to provide a new home for the community, and let people
                know that there exists a place where artists are prioritized.
            </p>
                </div>
        </Section>

        <Section image={sections[2].image}>
            <div className="sectionContent">
                <h2 className="text-3xl font-bold">
                    Our Stance on AI Art
                </h2>
                <p className="my-3">
                    AI companies need to respect visual creators’ copyright, just as
                    they do for music.
                </p>
                <p className="my-3">
                    Until laws are passed to protect visual artists, we believe that
                    a platform should:
                </p>
                <ol className="list-decimal ml-7">
                    <li>Opt images out of scraping by default, by using tags such as “NoAI"</li>
                    <li>Host no AI art until datasets are ethically sourced</li>
                </ol>
                <p className="my-3">
                    We are committed to upholding these beliefs at Cara, and will
                    make our best efforts in moderating content.
                </p>
            </div>


            <div className="sectionContent">
                <h2 className="text-3xl font-bold mt-5">
                    The Future
                </h2>
                <p className="my-3">
                    Once legal and unethical issues surrounding AI art are resolved,
                    we believe that AI art is here to stay.
                </p>

                <p className="my-3">
                    It’s a powerful tool that will become fixture in production
                    across industries and significantly change the way art is
                    created and consumed, and it will impact all of us.
                </p>
                <p className="my-3">
                    We want Cara to be a place for artist communities to find
                    discussions, education, and support as we all navigate this
                    incoming shift together.
                </p>
            </div>
        </Section>

        <Section image={sections[3].image} flip={true}>
            <div className="sectionContent">
                <h2 className="text-4xl font-bold">
                    Roadmap & FAQs
                </h2>
                <p className="my-3">
                    We are a very small group of volunteers, and so our ability
                    to do the things we wish to accomplish are limited by our
                    lack of manpower, funds, and things that simply require time.
                </p>
                <p className="my-3">
                    For Cara’s beta launch, we want to begin by supporting the
                    entertainment art industry that has been heavily affected
                    by the recent AI art stance taken by major industry art platforms.
                </p>
                <p className="my-3">
                    We want to be a place where the community can host their
                    portfolios while providing studios, art directors, and
                    clients a platform to easily seek out human artists for
                    the jobs they want to hire for. That is our primary goal
                    for now.
                </p>

                <p className="my-3">
                    In time, we hope to open up the platform to serve other
                    communities too. But for that to happen, we need time to
                    build out advanced tools, features, and learn more about
                    new communities that we are likely much less familiar with.
                </p>

                <p className="my-3">
                    We want to take each step with the utmost care and respect
                    for all, both for the community already on our platform,
                    and for newcomers looking to join. For that reason, we may
                    not be the perfect fit for everyone at this time.
                </p>
                <p className="my-3">
                    If you would like to learn more, check out our FAQs for
                    answers to frequently asked questions.
                </p>
            </div>
        </Section>

        <div className="my-10 p-5">
            <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start ">
                {profiles.map((profile) => {
                    return <Profile {...profile}/>
                })}
            </div>
            <div className="flex flex-col justify-center items-center my-10">
                <h1 className="font-bold">Contributors:</h1>
                <p>
                    Tiffany Trinh, Lyn Cooper, Novia Lim, Ivan Chen, David Lumley
                </p>
            </div>
        </div>

        <Section image={sections[4].image}>
            <div className="sectionContent">
                <h2 className="text-5xl font-bold">
                    Who’s Onboard?
                </h2>
                <p className="my-3">
                    We began testing and collecting feedback from a close circle
                    of friends, including art directors, leads, and alums from
                    companies and titles such as:
                </p>

                <ul className="list-disc ml-7 mb-5">
                    <li>Bungie</li>
                    <li>Kojima Productions</li>
                    <li>Marvel Studios</li>
                    <li>NVIDIA</li>
                    <li>Riot Games</li>
                    <li>Sony Santa Monica</li>
                    <li>SpaceX</li>
                    <li>Wizard of the Coast</li>
                </ul>

                <ul className="list-disc ml-7">
                    <li>Destiny 2</li>
                    <li>Death Stranding</li>
                    <li>Fallout: New Vegas</li>
                    <li>Halo Infinite</li>
                    <li>League of Legends</li>
                    <li>Lone Echo</li>
                    <li>Mass Effect 3</li>
                    <li>Metal Gear Solid</li>
                    <li>Magic: The Gathering</li>
                </ul>
                <p className="my-3">
                    We are actively looking to chat with more studios and art
                    directors to better understand their needs when seeking
                    artists to work with.
                </p>
                <p className="my-3">
                    Please reach out to info@cara.app or join our <a href="https://discord.com/invite/VdejWWvc5p" className="underline">Discord</a> if
                    you would like to shape how we build our future business
                    tools for facilitating work with our artist community!
                </p>
            </div>
        </Section>

        <div className="bg-[url(https://s3-alpha-sig.figma.com/img/8b01/71bb/170f4905ba63559d95881bae11337372?Expires=1674432000&Signature=R3QibV0Xl8N56mNM3Dk2BgXjBTZi8PETK6Y4ssmycbyhsTI0nv22Hn~vn3lkMl-QGriGZid5btyXTjvmD8dfA5xb5zAq3xGxlYv1wrdNULLbF~~Rz5AJPn8gtIKjyhRfzv1yRUq3YwmQxA-69fEFX3AiGCnXUOD~8r2BhFrC0caa1bWmpW2SXowR1oJg55BXsBi8JVzDQJ-ZX3Yp9jVXKWYG6fnBP3mvj6Jq3HOzN323lH50h3t3r4OIpz3Fafx-Zw7OUdLySsUqXWhoAQ2CYCT3SebvD~sXxv22hwOEIcABw~-ikUYBk37QYsPkUwWklUmOgFWG~CawUdDya~~aJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]
            h-screen bg-bottom bg-cover
            mt-10
            ">
            <div className="
                bg-black/40
                h-[100%]
                w-[100%]

                flex
                flex-col
                justify-center
                items-center
                ">
                <h2 className="text-2xl font-bold">Want to join Cara?</h2>
                <p className="m-5">
                    Industry professionals can apply for invites by emailing
                    invites@cara.app with portfolio or company links.
                </p>
                <p className="m-5">
                    Members of the public can sign up for a community account <a href="https://cara.app/"
                        className="underline"
                    >here</a>.
                </p>
                <p>
                    Thank you!
                </p>
            </div>
        </div>

        <footer className="flex justify-center items-center p-10">
            <ul className="flex flex-col md:flex-row">
                <li className="px-5">© Cara Project</li>
                <li className="opacity-0 md:opacity-100">|</li>
                <li className="px-5">About</li>
                <li className="opacity-0 md:opacity-100">|</li>
                <li className="px-5">Terms of Service</li>
                <li className="opacity-0 md:opacity-100">|</li>
                <li className="px-5">Privacy Policy</li>
            </ul>
        </footer>
    </div>
  );
}

export default LandingPage;
