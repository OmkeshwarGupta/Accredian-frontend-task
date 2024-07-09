import React from 'react'

const Hero2 = ({refer, setRefer}) => {

    const clickHandler = () => {
        console.log('clicked')
        console.log(refer)
        setRefer(true)
    }

    const programs = [

        { name: 'Professional Certificate Program in Product Management', referrerBonus: 7000, refereeBonus: 9000 },
        { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: 9000, refereeBonus: 11000 },
        { name: 'Executive Program in Data Driven Product Management', referrerBonus: 10000, refereeBonus: 10000 },
        { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: 10000, refereeBonus: 10000 },
        { name: 'Executive Program in Product Management', referrerBonus: 10000, refereeBonus: 10000 },
        { name: 'Advanced Certification in Product Management', referrerBonus: 10000, refereeBonus: 10000 },
        { name: 'Executive Program in Product Management and Project Management', referrerBonus: 10000, refereeBonus: 10000 },

    ]

    const categories = [
        "PRODUCT MANAGEMENT",
        "STRATEGY & LEADERSHIP",
        "BUSINESS MANAGEMENT",
        "FINTECH",
        "SENIOR MANAGEMENT",
        "DATA SCIENCE",
        "DIGITAL TRANSFORMATION",
        "BUSINESS ANALYTICS"
    ];

    return (
        <div>
            <div className='flex flex-col justify-center items-center  relative mt-24'>
                <div className='mt-8  text-3xl font-bold '>
                    <h1 >What Are The <span className='text-col2'>Referral Benefits?</span></h1>
                </div>
                <div>
                    <p className='text-[16px] absolute top-[120px] right-80'>Enrolled</p>
                    <div className='border border-black rounded-3xl w-[35px] h-[17px] absolute top-[125px] right-[275px]'></div>
                    <div className='h-[12px] w-[12px] bg-col2 rounded-full absolute top-[127px] right-[278px]'></div>
                </div>
                <div className='flex flex-row justify-center items-center mt-20 gap-10  '>
                    <div className=' rounded-2xl shadow-custom '>
                        <div className='w-[270px] h-[50px] text-white px-4  bg-col2 flex flex-row justify-between items-center rounded-t-2xl '>
                            <h2> ALL PROGRAMS </h2>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64601 1.64599C1.69245 1.59943 1.74763 1.56249 1.80837 1.53728C1.86912 1.51207 1.93424 1.4991 2.00001 1.4991C2.06578 1.4991 2.1309 1.51207 2.19164 1.53728C2.25239 1.56249 2.30756 1.59943 2.35401 1.64599L8.35401 7.64599C8.40057 7.69244 8.43751 7.74761 8.46272 7.80836C8.48793 7.86911 8.5009 7.93423 8.5009 7.99999C8.5009 8.06576 8.48793 8.13088 8.46272 8.19163C8.43751 8.25237 8.40057 8.30755 8.35401 8.35399L2.35401 14.354C2.26012 14.4479 2.13278 14.5006 2.00001 14.5006C1.86723 14.5006 1.7399 14.4479 1.64601 14.354C1.55212 14.2601 1.49938 14.1328 1.49938 14C1.49938 13.8672 1.55212 13.7399 1.64601 13.646L7.29301 7.99999L1.64601 2.35399C1.59945 2.30755 1.5625 2.25237 1.5373 2.19163C1.51209 2.13088 1.49911 2.06576 1.49911 1.99999C1.49911 1.93423 1.51209 1.86911 1.5373 1.80836C1.5625 1.74761 1.59945 1.69244 1.64601 1.64599Z" fill="white" stroke="white" stroke-width="1.5" />
                            </svg>
                        </div>
                        {
                            categories.map((category, index) => (
                                <div key={index} className='flex flex-col justify-center items-start w-[270px] h-[50px] px-4 mt-2 '>
                                    <div className='flex flow-row justify-between items-center w-full  '>
                                        <p>{category}</p>
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.26671 1.53235C1.29936 1.49961 1.33816 1.47363 1.38087 1.45591C1.42358 1.43818 1.46937 1.42906 1.51561 1.42906C1.56186 1.42906 1.60764 1.43818 1.65035 1.45591C1.69307 1.47363 1.73186 1.49961 1.76452 1.53235L5.98327 5.7511C6.01601 5.78375 6.04198 5.82255 6.05971 5.86526C6.07743 5.90797 6.08655 5.95376 6.08655 6C6.08655 6.04625 6.07743 6.09203 6.05971 6.13474C6.04198 6.17746 6.01601 6.21625 5.98327 6.24891L1.76452 10.4677C1.6985 10.5337 1.60897 10.5708 1.51561 10.5708C1.42225 10.5708 1.33272 10.5337 1.26671 10.4677C1.20069 10.4016 1.16361 10.3121 1.16361 10.2188C1.16361 10.1254 1.20069 10.0359 1.26671 9.96985L5.23725 6L1.26671 2.03016C1.23397 1.9975 1.20799 1.95871 1.19027 1.916C1.17254 1.87328 1.16342 1.8275 1.16342 1.78125C1.16342 1.73501 1.17254 1.68922 1.19027 1.64651C1.20799 1.6038 1.23397 1.565 1.26671 1.53235Z" fill="#3C4852" stroke="#3C4852" stroke-width="1.05469" />
                                        </svg>

                                    </div>
                                    {index < categories.length - 1 && <hr className='bg-col6 w-[227px] mt-3 h-[2px]' />}

                                </div>
                            ))
                        }

                    </div>
                    <div>
                        <table className='table-auto shadow-custom  rounded-2xl overflow-hidden'>
                            <thead className='bg-col7 w-[921px] h-[58px] '>
                                <tr className='text-col8'>
                                    <th className='text-start pl-7' >Programs</th>
                                    <th className='w-[153px]' >Referrer Bonus</th>
                                    <th className='w-[153px]' >Referee Bonus</th>
                                </tr>
                            </thead>
                            <tbody className='h-[503px]'>
                                {programs.map(program => (
                                    <tr key={program.name}  className=' '>
                                        

                                        <td className=" flex  w-[387px] justify-start items-center gap-3 pl-7 pt-3  ">

                                        <td><svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0235 12.0904L11.4957 11.8927L6.01172 9.83601V11.9882C6.01172 13.6484 8.7032 14.9941 12.0235 14.9941C15.3438 14.9941 18.0353 13.6484 18.0353 11.9882V9.83601L12.5514 11.8927L12.0235 12.0904Z" fill="url(#paint0_linear_1_322)" />
                                            <path d="M22.5443 6.53999L23.7093 6.10313C23.9125 6.02689 24.0472 5.83255 24.0472 5.61544V4.83439C24.0472 4.61727 23.9125 4.42293 23.7093 4.3467L12.2065 0.0331629C12.0886 -0.0110543 11.9586 -0.0110543 11.8407 0.0331629L0.337968 4.3467C0.134678 4.42293 0 4.61727 0 4.83439V5.61544C0 5.83255 0.134678 6.02689 0.337968 6.10313L12.0236 10.4852L21.0413 7.1036V8.70875V11.4453C20.594 11.7056 20.2898 12.1848 20.2898 12.7397C20.2898 13.2946 20.594 13.7737 21.0413 14.034L19.7068 16.8882C19.594 17.1295 19.6802 17.4173 19.908 17.5555C20.3643 17.8323 21.0512 18 21.7928 18C22.5344 18 23.2213 17.8323 23.6776 17.5555C23.9054 17.4173 23.9916 17.1295 23.8788 16.8882L22.5443 14.034C22.9916 13.7737 23.2958 13.2946 23.2958 12.7397C23.2958 12.1848 22.9916 11.7056 22.5443 11.4453V8.14515V6.53999Z" fill="url(#paint1_linear_1_322)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1_322" x1="-2.35216" y1="-3.50628" x2="24.0881" y2="23.6511" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.184358" stop-color="#29ABE2" />
                                                    <stop offset="0.821198" stop-color="#6200D2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1_322" x1="0.664209" y1="-6.44287" x2="27.1043" y2="20.7148" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.184358" stop-color="#29ABE2" />
                                                    <stop offset="0.821198" stop-color="#6200D2" />
                                                </linearGradient>
                                            </defs>
                                        </svg></td>

                                            {program.name}</td>
                                        <td className=" text-center">₹ {program.referrerBonus.toLocaleString()}</td>
                                        <td className="text-center ">₹ {program.refereeBonus.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='w-[175px] h-[41px] border border-col6 font-semibold absolute bottom-28 right-72  rounded-lg text-col6 flex justify-center items-center gap-2'>
                    Show More
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_432)">
                            <path d="M2.49545 0.514712L1.08124 1.92892L8.1523 8.99999L15.2234 1.92889L13.8092 0.514679L8.15231 6.17157L2.49545 0.514712Z" fill="#B6B6B6" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_432">
                                <rect width="15" height="9" fill="white" transform="translate(0.909912)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div>
                    <button className='bg-col2 px-[16px] py-[8px] rounded-md text-white inline-block  mt-32 w-[236px] h-[64px] '
                    onClick={()=>clickHandler()}>Refer Now</button>

                </div>
            </div>

        </div>
    )
}

export default Hero2
