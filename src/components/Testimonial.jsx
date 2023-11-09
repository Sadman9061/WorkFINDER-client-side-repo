

const Testimonial = () => {
    return (
        <div className="mx-6 md:mx-14 lg:mx-28 mb-20">
            <div className="flex justify-center mt-48 mb-28 ">
                <div className="space-y-7 text-center">
                    <h1 className="text-black text-lg font-semibold tracking-widest">DON'T JUST TAKE IT FROM US </h1>
                    <h1 className="text-4xl font-bold">From our users </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 font-medium">
                <div className="border border-slate-300 p-10 space-y-5 shadow-xl">
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg" alt="" />
                    <p >
                    I got my tech job on WorkFINDER  4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.

                    </p>
                </div>
                <div className="border border-slate-300 p-10 space-y-5 shadow-xl">
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg" alt="" />
                    <p >
                    I love WorkFINDER . I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.


                    </p>
                </div>
                <div className="border border-slate-300 p-10 space-y-5 shadow-xl">
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg" alt="" />
                    <p >
                    I can't imagine my day to day without this platform. Life would be a lot more difficult.


                    </p>
                </div>
                <div className="border border-slate-300 p-10 space-y-5 shadow-xl">
                    <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg" alt="" />
                    <p >
                    Half of the offers I give are sourced from WorkFINDER . It's the best product for anyone looking for startup talent.


                    </p>
                </div>
               
            </div>
        </div>
    );
};

export default Testimonial;