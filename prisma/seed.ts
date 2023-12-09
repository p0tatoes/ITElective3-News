import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.news.create({
        data: {
            title: 'Surigao del Sur earthquakes generate over 5,000 aftershocks',
            author: 'Angeline Marcelino',
            body: `Over 5,000 aftershocks  have been recorded, so far, following the magnitude 7.4 and 6.8 earthquakes that struck Surigao del Sur recently, the National Disaster Risk Reduction and Management Council (NDRRMC) said on Saturday.

            As of 4:00 a.m. Friday, the NDRRMC said a total of 5,653 aftershocks have been recorded.
            
            A total of  3,984 aftershocks were from the magnitude 7.4 temblor northeast of Hinatuan on December 2 while 1,669 were from the magnitude 6.8 temblor northeast of Cagwait on December 4.
            
            The NDRRMC said that for the Hinatuan earthquake, 879 aftershocks were plotted, while 53 were felt, ranging from magnitude 1.3 to magnitude 6.6, with intensities ranging from I to IV.
            
            For the Cagwait earthquake, the NDRRMC said 459 aftershocks were plotted, while 10 were felt. Their magnitude ranged from magnitude 1.4 to 5.8, with Intensity IV as the highest intensity recorded.
            
            The NDRRMC said the aftershocks were felt in the province of Surigao del Sur and some parts of Mindanao. The province was also placed under a state of calamity.
            
            Based on the NDRRMC’s latest situation report, almost 700,000 individuals were affected by the earthquakes, which also resulted in three deaths.
            
            Around 6,000 houses and other infrastructure were damaged.
            
            Original article: https://newsinfo.inquirer.net/1873120/aftershocks-of-surigao-del-surs-magnitude-7-4-and-6-8-earthquakes#vuukle-emote`,
        },
    })
    await prisma.news.create({
        data: {
            title: 'China rejects PH House resolution condemning actions in WPS',
            author: 'Adrian Parungao',
            body: `The Chinese Foreign Ministry has rebuffed the resolution of the Philippine House of the Representatives to condemn China’s illegal actions in the West Philippine Sea.

            According to Chinese Foreign Ministry Spokesperson Wang Wenbin on Friday, China firmly rejected the resolution which “groundlessly criticized, misrepresented and smeared China.”
            
            “The resolution adopted by the House of Representatives of the Philippines groundlessly criticized, misrepresented and smeared China. We firmly reject it,” he said in a statement.
            
            “First, China has indisputable sovereignty over Nanhai Zhudao, consisting of Dongsha Qundao, Xisha Qundao, Zhongsha Qundao, and Nansha Qundao, and their adjacent waters, and has sovereign rights and jurisdiction over relevant waters,” he added.
            
            Wang also reiterated previous claims that the South China Sea Arbitration award is “illegal, null and void,” and that China does not recognize it, and nor will accept claims or actions based on the award.
            
            “Second, the Arbitral Tribunal in the South China Sea Arbitration violated the principle of state consent, exercised its jurisdiction ultra vires, and rendered an award in disregard of the law. This is a grave violation of UNCLOS and general international law. The award is illegal, null and void. China does not accept or recognize it, and will never accept any claim or action based on the award,” Wang added.
            
            The official also said that the Philippines should stop “hyping up maritime disputes” and the “infringement of China’s sovereignty” and instead negotiate and consult with China for peace and stability in the region.
            
            “We once again urge the Philippines to stop hyping up maritime disputes between China and the Philippines, stop its infringement of China’s sovereignty and provocation at sea, return to the right track of resolving maritime disputes through negotiation and consultation as soon as possible, and work with China to safeguard peace and stability in the South China Sea,” he said.
            
            On Wednesday, the House of Representatives adopted a resolution that insisted that China is continuing its intrusion over Philippine territory in the West Philippine Sea.
            
            Original article: https://globalnation.inquirer.net/223997/china-rejects-ph-house-resolution-condemning-actions-on-west-philippine-sea`,
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })

    .catch(async (e) => {
        console.error(e)

        await prisma.$disconnect()

        process.exit(1)
    })
