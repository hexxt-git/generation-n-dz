interface Event {
    id: number;
    from: Date;
    to: Date;
    name: string;
    description: string;
    image: string;
    category: string;
    color?: string;
    row?: number;
    article?: string;
}

// Map categories to colors
const categoryColorMap: { [key: string]: string } = {
    social: "#f87171", // Red for social issues
    war: "#a3a3a3", // Gray for war events
    politics: "#3b82f6", // Blue for political events
    economics: "#34d399", // Green for economic events
    culture: "#fbbf24", // Yellow for cultural events
    arts: "#c084fc", // Purple for arts events
    sports: "#89fb89", // Light green for sports events
    health: "#ffbb33", // Orange for health-related events
};

export const events: Event[] = [
    {
        id: 1,
        from: new Date("1954-11-01"),
        to: new Date("1962-03-19"),
        name: "Algerian War of Independence",
        description:
            "The FLN launches attacks marking the beginning of the war until independence.",
        image: "",
        category: "war",
        color: categoryColorMap["war"],
        article: `
            <h1>Algerian War of Independence</h1>
            <h2>Background</h2>
            <p>The Algerian War of Independence began on November 1, 1954, as the National Liberation Front (FLN) launched coordinated attacks across the country. This marked the start of Algeria’s long and difficult struggle to break free from French colonial rule.</p>
            <h2>The FLN's Rise</h2>
            <p>The FLN was instrumental in organizing the struggle for independence, establishing an organized resistance against the French presence, which had spanned more than a century.</p>
            <h2>Key Events</h2>
            <p>Throughout the war, the FLN employed guerrilla tactics and sought international support, drawing global attention to their cause. The French responded with heavy military force, leading to significant civilian casualties and a humanitarian crisis.</p>
            <h2>Independence Achieved</h2>
            <p>The war formally ended with the signing of the Evian Accords in 1962. This agreement between the French government and the FLN resulted in a ceasefire and, eventually, full independence for Algeria on July 5, 1962.</p>
            <h2>Legacy</h2>
            <p>The Algerian War of Independence remains a defining event in the country’s history, symbolizing a hard-won struggle and inspiring decolonization movements worldwide.</p>
        `,
    },
    {
        id: 2,
        from: new Date("1956-03-24"),
        to: new Date("1956-03-24"),
        name: "Formation of the FLN",
        description:
            "The FLN is officially formed as the leading nationalist movement.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Formation of the FLN</h1>
            <h2>Establishing the National Liberation Front</h2>
            <p>On March 24, 1956, the National Liberation Front (FLN) was officially formed. This organization aimed to unify Algerian nationalists under a single banner, channeling their efforts towards achieving independence from French rule.</p>
            <h2>Goals and Ideology</h2>
            <p>The FLN was deeply influenced by anti-colonial ideology, and it drew support from various groups within Algeria, including labor unions, intellectuals, and rural populations. Their main objective was to achieve national sovereignty.</p>
            <h2>Organizational Structure</h2>
            <p>Once established, the FLN developed a well-organized structure, allowing it to coordinate military and political efforts across Algeria. This structure included regional commanders and an internal council.</p>
            <h2>First Steps in the Struggle</h2>
            <p>After its formation, the FLN initiated its first major attacks, sparking the Algerian War of Independence. These initial actions marked the start of a determined campaign that would last until Algeria’s independence in 1962.</p>
            <h2>Legacy</h2>
            <p>The FLN would go on to lead the independent Algerian government after 1962, cementing its role as a cornerstone of Algerian history and identity.</p>
        `,
    },
    {
        id: 3,
        from: new Date("1958-09-19"),
        to: new Date("1962-07-03"),
        name: "Provisional Government of the Algerian Republic",
        description:
            "The GPRA is established to represent Algerian interests abroad.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Provisional Government of the Algerian Republic (GPRA)</h1>
            <h2>Introduction</h2>
            <p>On September 19, 1958, the Provisional Government of the Algerian Republic (GPRA) was established. This governing body sought to formalize Algerian leadership in the international arena during the Algerian War of Independence.</p>
            <h2>International Recognition</h2>
            <p>The GPRA’s creation marked a critical point for Algeria's independence movement, as it garnered diplomatic recognition from many nations, gaining support for its cause on a global scale.</p>
            <h2>Key Objectives</h2>
            <p>The GPRA’s objectives were to negotiate with foreign powers, secure funding, and maintain support for the FLN’s mission of independence.</p>
            <h2>Negotiations with France</h2>
            <p>The GPRA played a crucial role in negotiating with the French government, eventually leading to the Evian Accords. This agreement would pave the way for Algerian independence in 1962.</p>
            <h2>Legacy and Impact</h2>
            <p>The GPRA set the foundation for the post-independence Algerian state, creating a legacy of national sovereignty and self-determination.</p>
        `,
    },
    {
        id: 4,
        from: new Date("1962-03-18"),
        to: new Date("1962-07-05"),
        name: "Evian Accords and Independence",
        description:
            "The Evian Accords lead to a ceasefire, and Algeria gains independence.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>The Evian Accords and Algerian Independence</h1>
            <h2>The Path to Peace</h2>
            <p>The Evian Accords were signed on March 18, 1962, marking the end of the Algerian War of Independence. These agreements established a ceasefire and set forth the terms for Algerian independence from France.</p>
            <h2>Key Provisions</h2>
            <p>The accords provided for a transition period during which Algeria would prepare for full independence. Provisions were also made to protect French nationals remaining in Algeria.</p>
            <h2>Ceasefire and Diplomatic Achievements</h2>
            <p>The Evian Accords marked a significant diplomatic achievement for the FLN and the GPRA, solidifying their position as legitimate representatives of the Algerian people.</p>
            <h2>Independence Declared</h2>
            <p>On July 5, 1962, Algeria officially declared independence. The day marked the beginning of a new era and a period of reconstruction and self-determination for the Algerian nation.</p>
            <h2>Enduring Significance</h2>
            <p>The Evian Accords are remembered as a milestone in Algerian history, representing the ultimate victory of a determined struggle against colonialism.</p>
        `,
    },
    {
        id: 5,
        from: new Date("1962-07-05"),
        to: new Date("1962-07-05"),
        name: "Algerian Independence Day",
        description: "Algeria officially gains independence from France.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Algerian Independence Day</h1>
            <h2>Victory After a Long Struggle</h2>
            <p>July 5, 1962, marked Algeria's official independence from France, following over seven years of war and a long-standing anti-colonial movement. This date became a symbol of Algeria’s strength, resilience, and unity.</p>
            <h2>Celebrations Across the Nation</h2>
            <p>Independence Day is celebrated annually in Algeria with parades, speeches, and cultural events honoring the efforts of those who fought for freedom.</p>
            <h2>A New Beginning</h2>
            <p>Independence allowed Algeria to forge its path as a sovereign nation. The FLN took the reins, setting up an Algerian government focused on rebuilding and modernization.</p>
            <h2>Legacy of Independence</h2>
            <p>July 5 is a date held with great pride by Algerians. It serves as a reminder of the sacrifices made by countless individuals in pursuit of a free Algeria.</p>
            <h2>Global Impact</h2>
            <p>The Algerian War and subsequent independence influenced decolonization movements around the world, especially in Africa and Asia.</p>
        `,
    },
    {
        id: 6,
        from: new Date("1963-09-08"),
        to: new Date("1963-09-08"),
        name: "First Algerian Constitution Adopted",
        description:
            "Algeria adopts its first constitution, establishing a one-party state.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>First Algerian Constitution Adopted</h1>
            <h2>Historical Context</h2>
            <p>On September 8, 1963, Algeria adopted its first constitution, setting the foundation for governance after achieving independence the previous year. This was a critical step in establishing the new nation's legal and political structure.</p>
            <h2>Key Provisions</h2>
            <p>The 1963 constitution outlined a presidential system with a one-party state dominated by the National Liberation Front (FLN), emphasizing the importance of national unity and anti-colonial values.</p>
            <h2>Political System</h2>
            <p>The new constitution established the FLN as the only legal political party, reflecting the country's commitment to socialist principles and centralization under a single party.</p>
            <h2>Economic and Social Goals</h2>
            <p>The constitution highlighted goals for social justice, equality, and economic self-sufficiency. It laid the groundwork for state-led development and nationalization of resources.</p>
            <h2>Legacy and Significance</h2>
            <p>This initial constitution influenced the structure of Algerian politics for decades, setting a precedent for the role of the FLN and the direction of national policy.</p>
        `,
    },
    {
        id: 7,
        from: new Date("1965-06-19"),
        to: new Date("1978-12-27"),
        name: "Houari Boumédiène's Rule",
        description:
            "Houari Boumédiène overthrows Ahmed Ben Bella to become president until his death.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Houari Boumédiène's Rule</h1>
            <h2>Background</h2>
            <p>On June 19, 1965, Houari Boumédiène led a military coup that overthrew Algeria's first president, Ahmed Ben Bella. Boumédiène assumed power, establishing an authoritarian regime that lasted until his death in 1978.</p>
            <h2>Economic Reforms</h2>
            <p>Under Boumédiène's rule, Algeria pursued significant economic reforms, including the nationalization of oil and gas resources, which became a cornerstone of the Algerian economy.</p>
            <h2>Industrialization and Development</h2>
            <p>Boumédiène prioritized industrialization and implemented a state-led development model. Infrastructure projects and state enterprises were established to stimulate growth and create employment.</p>
            <h2>Social Policies</h2>
            <p>The Boumédiène era was marked by efforts to improve education, healthcare, and social welfare, with the aim of reducing inequality and improving quality of life.</p>
            <h2>Legacy</h2>
            <p>Boumédiène’s rule left a lasting impact on Algeria's political and economic landscape, and his policies shaped the country’s direction for years to come.</p>
        `,
    },
    {
        id: 8,
        from: new Date("1976-11-19"),
        to: new Date("1976-11-19"),
        name: "New Constitution Adopted",
        description:
            "A new constitution emphasizes socialism and Arab nationalism.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Adoption of the 1976 Constitution</h1>
            <h2>Introduction</h2>
            <p>On November 19, 1976, Algeria adopted a new constitution under President Houari Boumédiène, which emphasized socialism and Arab nationalism as guiding principles for the nation.</p>
            <h2>Core Ideologies</h2>
            <p>This constitution solidified Algeria's commitment to socialism, positioning the state as the main driver of economic and social policies.</p>
            <h2>Political Structure</h2>
            <p>The 1976 constitution reaffirmed the FLN as the sole political party, centralizing power and reinforcing the one-party system in Algeria.</p>
            <h2>Impact on Society</h2>
            <p>The new constitution aimed to promote equality and social justice, outlining citizens' rights to education, healthcare, and employment.</p>
            <h2>Legacy</h2>
            <p>The 1976 constitution was a landmark in Algeria’s development, shaping its policies and governance until reforms in the 1980s and 1990s introduced more pluralistic elements.</p>
        `,
    },
    {
        id: 9,
        from: new Date("1980-03-01"),
        to: new Date("1980-04-30"),
        name: "Berber Spring",
        description:
            "Protests in Kabylie highlight issues of cultural rights and identity.",
        image: "",
        category: "social",
        color: categoryColorMap["social"],
        article: `
            <h1>The Berber Spring</h1>
            <h2>Background</h2>
            <p>The Berber Spring, which took place from March to April 1980, was a pivotal moment in Algeria’s history. Centered in the Kabylie region, this movement called for cultural recognition of the Berber identity and language.</p>
            <h2>Cause of the Protests</h2>
            <p>The protests began as a response to the government’s suppression of a planned lecture by Mouloud Mammeri on Berber poetry. This act symbolized a broader repression of Berber culture and language.</p>
            <h2>Demands for Cultural Rights</h2>
            <p>The Berber community demanded official recognition of Tamazight (Berber language) and an end to cultural discrimination.</p>
            <h2>Impact and Significance</h2>
            <p>The Berber Spring marked the beginning of a long struggle for cultural rights in Algeria. While immediate demands were not met, it set the foundation for future movements.</p>
            <h2>Legacy</h2>
            <p>The movement remains an important chapter in Algeria’s history, symbolizing the resilience of the Berber identity and inspiring future generations to continue advocating for their rights.</p>
        `,
    },
    {
        id: 10,
        from: new Date("1988-10-05"),
        to: new Date("1988-10-10"),
        name: "October Riots",
        description:
            "Widespread protests lead to political reforms and multi-party elections.",
        image: "",
        category: "social",
        color: categoryColorMap["social"],
        article: `
            <h1>The October Riots of 1988</h1>
            <h2>Prelude to Unrest</h2>
            <p>In October 1988, Algeria experienced a wave of protests and riots that stemmed from high unemployment, economic hardship, and growing public discontent with government policies.</p>
            <h2>The Protests Erupt</h2>
            <p>On October 5, 1988, protests erupted in Algiers and quickly spread across the country. Citizens called for political change, social reform, and an end to government corruption.</p>
            <h2>Government Response</h2>
            <p>The government responded with a harsh crackdown, deploying the military to restore order. This response resulted in numerous casualties and widespread human rights abuses.</p>
            <h2>Political Reforms</h2>
            <p>The protests ultimately forced the government to enact political reforms, leading to the establishment of a multi-party political system in 1989.</p>
            <h2>Legacy of the Riots</h2>
            <p>The October Riots are remembered as a turning point in Algerian history, marking the beginning of a new era of political pluralism and civil rights in Algeria.</p>
        `,
    },
    {
        id: 11,
        from: new Date("1991-06-12"),
        to: new Date("1991-06-12"),
        name: "First Multi-Party Elections",
        description:
            "The first multi-party elections are held, leading to the rise of the FIS.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>First Multi-Party Elections in Algeria</h1>
            <h2>A New Chapter in Algerian Politics</h2>
            <p>On June 12, 1991, Algeria held its first multi-party elections, marking a significant step towards democratization after decades of single-party rule under the FLN.</p>
            <h2>The Role of the FIS</h2>
            <p>The Islamic Salvation Front (FIS) emerged as a powerful political force, gaining significant support in the elections. This rise highlighted public discontent with the FLN and a desire for political change.</p>
            <h2>Suspension of the Process</h2>
            <p>The election results led to tensions within the government, and subsequent military intervention halted the electoral process, preventing the FIS from gaining power.</p>
            <h2>Impact on Algerian Society</h2>
            <p>This decision to suspend the elections led to widespread unrest and contributed to the outbreak of the Algerian Civil War in the following year.</p>
            <h2>Legacy</h2>
            <p>The 1991 elections and their aftermath continue to shape Algerian politics and society, highlighting the challenges of democratization in the face of political and ideological divides.</p>
        `,
    },
    {
        id: 12,
        from: new Date("1992-01-11"),
        to: new Date("2002-02-08"),
        name: "Algerian Civil War",
        description: "The military cancels elections, sparking a civil war.",
        image: "",
        category: "war",
        color: categoryColorMap["war"],
        article: `
            <h1>The Algerian Civil War</h1>
            <h2>Origins of the Conflict</h2>
            <p>The Algerian Civil War, also known as the “Black Decade,” began in 1992 following the military’s decision to cancel elections that were expected to bring the Islamic Salvation Front (FIS) to power. This decision led to widespread unrest and the eventual descent into armed conflict.</p>
            <h2>Main Parties Involved</h2>
            <p>The conflict pitted the Algerian government and military forces against various Islamist groups, with the Armed Islamic Group (GIA) and later the Islamic Salvation Army (AIS) becoming central players in the insurgency.</p>
            <h2>Impact on Civilians</h2>
            <p>The civil war had devastating effects on civilians, with tens of thousands losing their lives and countless others displaced. Atrocities were committed by both government forces and insurgents, leaving lasting scars on Algerian society.</p>
            <h2>International Response</h2>
            <p>The international community responded with mixed reactions, with some countries supporting the government’s stance against Islamist groups, while others raised concerns about human rights abuses.</p>
            <h2>Resolution and Aftermath</h2>
            <p>The civil war gradually wound down by 2002, with a partial victory claimed by the government. A reconciliation process was introduced, though the conflict’s legacy remains influential in Algerian politics.</p>
        `,
    },
    {
        id: 13,
        from: new Date("1994-01-30"),
        to: new Date("1994-01-30"),
        name: "Establishment of the High Council of State",
        description:
            "A transitional body is formed to govern during the civil war.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Establishment of the High Council of State</h1>
            <h2>Purpose and Formation</h2>
            <p>On January 30, 1994, the High Council of State (HCE) was established as a temporary governing body in Algeria, intended to provide stability during the tumultuous period of the Algerian Civil War.</p>
            <h2>Key Members</h2>
            <p>The HCE included a mix of military officials, political leaders, and other prominent figures, with Ali Kafi appointed as its head. It sought to stabilize the nation amidst growing violence.</p>
            <h2>Goals and Objectives</h2>
            <p>The council aimed to restore order, maintain government control, and navigate the political challenges presented by the Islamist insurgency led by the FIS.</p>
            <h2>International Perception</h2>
            <p>The creation of the HCE received international scrutiny, as some viewed it as an undemocratic measure. However, others considered it necessary to prevent the complete destabilization of Algeria.</p>
            <h2>Legacy and Outcome</h2>
            <p>The HCE’s tenure marked an era of intense state control and set the stage for the continuation of the civil war. Its role in Algerian history remains controversial.</p>
        `,
    },
    {
        id: 14,
        from: new Date("1999-04-15"),
        to: new Date("2019-04-02"),
        name: "Bouteflika's Presidency",
        description:
            "Abdelaziz Bouteflika's presidency, marked by efforts for national reconciliation.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Bouteflika's Presidency</h1>
            <h2>Assumption of Office</h2>
            <p>Abdelaziz Bouteflika became Algeria’s president on April 15, 1999. His presidency was seen as a move towards national reconciliation following the civil war's turbulent years.</p>
            <h2>National Reconciliation Initiatives</h2>
            <p>Bouteflika implemented policies aimed at reconciling the nation, including the Charter for Peace and National Reconciliation, which sought to pardon former militants and encourage peace.</p>
            <h2>Economic and Social Reforms</h2>
            <p>Under his leadership, Bouteflika pursued economic reforms, focusing on rebuilding infrastructure and improving living conditions for Algerians.</p>
            <h2>Criticism and Controversies</h2>
            <p>While Bouteflika’s efforts for peace were initially celebrated, his later years in office saw criticism regarding his handling of the economy and restrictions on political freedoms.</p>
            <h2>Legacy and Departure</h2>
            <p>Bouteflika’s presidency ended in 2019 amid protests and demands for change. His legacy remains a blend of peace-building efforts and controversies over governance.</p>
        `,
    },
    {
        id: 15,
        from: new Date("2001-04-01"),
        to: new Date("2001-06-14"),
        name: "Black Spring Protests",
        description: "Protests in Kabylie demand cultural rights and autonomy.",
        image: "",
        category: "social",
        color: categoryColorMap["social"],
        article: `
            <h1>The Black Spring Protests</h1>
            <h2>Origins of the Protest</h2>
            <p>The Black Spring protests, beginning in April 2001 in Kabylie, were sparked by the death of a young man in police custody, igniting widespread unrest in the region.</p>
            <h2>Demands for Cultural Rights</h2>
            <p>Protesters in Kabylie demanded recognition of Berber identity, official status for the Berber language, and cultural autonomy for the region.</p>
            <h2>Government Response</h2>
            <p>The government’s response to the protests was marked by force, with reports of violence and human rights abuses against protesters, which only fueled further unrest.</p>
            <h2>Impact on Algerian Society</h2>
            <p>The Black Spring highlighted the ongoing struggles of the Berber community in Algeria and brought issues of cultural recognition to the forefront of national discourse.</p>
            <h2>Legacy and Significance</h2>
            <p>The protests ultimately led to increased cultural rights for Berbers, with the recognition of Tamazight as a national language in 2002, a significant victory for the movement.</p>
        `,
    },
    {
        id: 16,
        from: new Date("2004-04-08"),
        to: new Date("2004-04-08"),
        name: "Bouteflika Reelected",
        description:
            "Bouteflika is reelected amid allegations of electoral fraud.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Bouteflika's Re-election</h1>
            <h2>Election Overview</h2>
            <p>On April 8, 2004, Abdelaziz Bouteflika was reelected as president of Algeria. The election was marred by allegations of fraud, raising questions about the legitimacy of his administration.</p>
            <h2>Electoral Controversies</h2>
            <p>Opposition candidates and political observers claimed irregularities in the voting process, casting doubt on the election’s fairness.</p>
            <h2>Bouteflika's Agenda</h2>
            <p>Following his reelection, Bouteflika continued his policies of national reconciliation and economic reform, emphasizing stability and development.</p>
            <h2>Public Perception</h2>
            <p>Bouteflika’s popularity remained divided, with some supporting his reconciliation efforts while others criticized the lack of political freedom.</p>
            <h2>Legacy of the Election</h2>
            <p>The 2004 election set the stage for future political tensions and highlighted the ongoing challenges in Algeria’s democratic process.</p>
        `,
    },
    {
        id: 17,
        from: new Date("2005-09-29"),
        to: new Date("2005-09-29"),
        name: "Charter for Peace and National Reconciliation",
        description:
            "The government announces a plan for national reconciliation with former militants.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Charter for Peace and National Reconciliation</h1>
            <h2>Purpose of the Charter</h2>
            <p>On September 29, 2005, the Algerian government introduced the Charter for Peace and National Reconciliation, aiming to heal the country’s wounds following the civil war.</p>
            <h2>Key Provisions</h2>
            <p>The charter offered amnesty to former militants who renounced violence and aimed to reintegrate them into society, fostering an environment of reconciliation.</p>
            <h2>Public Reception</h2>
            <p>The charter was met with mixed reactions; some viewed it as a necessary step toward peace, while others criticized it for failing to address human rights abuses during the war.</p>
            <h2>National Referendum</h2>
            <p>A national referendum was held in November 2005 to ratify the charter, resulting in overwhelming support, thus legitimizing the government’s reconciliation efforts.</p>
            <h2>Long-term Effects</h2>
            <p>While the charter helped reduce violence, its effectiveness in fully reconciling Algerian society remains debated, as many issues from the civil war continue to linger.</p>
        `,
    },
    {
        id: 18,
        from: new Date("2011-02-12"),
        to: new Date("2011-03-18"),
        name: "Protests Against Government",
        description:
            "Inspired by the Arab Spring, protests erupt across Algeria.",
        image: "",
        category: "social",
        color: categoryColorMap["social"],
        article: `
            <h1>Protests Against the Government</h1>
            <h2>Inspiration from the Arab Spring</h2>
            <p>In early 2011, Algeria witnessed a wave of protests inspired by the Arab Spring, as citizens demanded political reform, greater freedoms, and an end to the long-standing regime.</p>
            <h2>Key Demands</h2>
            <p>Protesters called for job creation, reduced food prices, and an end to government corruption. The protests highlighted deep-seated frustrations among the populace.</p>
            <h2>Government Response</h2>
            <p>The government initially responded with repression, deploying security forces to quell protests. However, it also announced some reforms to appease demonstrators.</p>
            <h2>Impact on Algerian Society</h2>
            <p>The protests marked a turning point in Algerian society, leading to increased political activism and raising awareness of civil rights issues.</p>
            <h2>Legacy of the Protests</h2>
            <p>Although the immediate impact of the protests was limited, they set the stage for future movements and underscored the demand for change among Algerians.</p>
        `,
    },
    {
        id: 19,
        from: new Date("2014-04-17"),
        to: new Date("2014-04-17"),
        name: "Bouteflika's Fourth Term",
        description: "Bouteflika is elected for a fourth term amid protests.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Bouteflika's Fourth Term</h1>
            <h2>Election Context</h2>
            <p>On April 17, 2014, Abdelaziz Bouteflika was elected for a controversial fourth term as president of Algeria, amid widespread protests and allegations of electoral fraud.</p>
            <h2>Health Concerns</h2>
            <p>Bouteflika's health had significantly declined, raising concerns about his ability to govern effectively. Many questioned the legitimacy of the election given his incapacitated state.</p>
            <h2>Public Discontent</h2>
            <p>The election was met with significant public discontent, as many citizens felt disillusioned by the political system and skeptical about the prospects for real change.</p>
            <h2>Reactions and Protests</h2>
            <p>In the wake of the election, protests erupted across the country, reflecting the frustrations of Algerians with the political elite and calls for a new direction for the nation.</p>
            <h2>Legacy and Impact</h2>
            <p>Bouteflika's fourth term would ultimately lead to further protests in 2019, culminating in his resignation and a turning point in Algeria's political landscape.</p>
        `,
    },
    {
        id: 20,
        from: new Date("2019-02-22"),
        to: new Date("2019-04-02"),
        name: "Hirak Movement",
        description:
            "Nationwide protests begin against Bouteflika's fifth-term bid, leading to his resignation.",
        image: "",
        category: "social",
        color: categoryColorMap["social"],
        article: `
            <h1>The Hirak Movement</h1>
            <h2>Origins of the Movement</h2>
            <p>The Hirak movement emerged in February 2019, initially sparked by Abdelaziz Bouteflika's announcement to run for a fifth presidential term. This move was met with widespread disapproval from the public.</p>
            <h2>Protests and Mobilization</h2>
            <p>Mass protests erupted every Friday, with citizens demanding Bouteflika’s resignation and broader political reforms. The movement was characterized by its peaceful nature and broad participation across social classes.</p>
            <h2>Demands for Change</h2>
            <p>Protesters called for an end to corruption, greater political freedoms, and a complete overhaul of the political system, reflecting deep-seated frustrations with decades of ruling party dominance.</p>
            <h2>Government Response</h2>
            <p>The government initially attempted to suppress the protests but eventually conceded to the demands, leading to Bouteflika’s resignation on April 2, 2019.</p>
            <h2>Legacy of the Hirak Movement</h2>
            <p>The Hirak movement marked a significant moment in Algeria's history, demonstrating the power of collective action and the demand for democracy, influencing ongoing political discourse.</p>
        `,
    },
    {
        id: 21,
        from: new Date("2019-12-12"),
        to: new Date("2019-12-12"),
        name: "Presidential Elections",
        description: "Presidential elections held amid protests and boycotts.",
        image: "",
        category: "politics",
        color: categoryColorMap["politics"],
        article: `
            <h1>Presidential Elections of December 2019</h1>
            <h2>Context of the Elections</h2>
            <p>On December 12, 2019, Algeria held presidential elections following the resignation of Bouteflika amid the Hirak protests. The elections were marred by boycotts and widespread discontent.</p>
            <h2>Candidates and Campaigns</h2>
            <p>The election featured several candidates, but public confidence was low, as many viewed the election as a continuation of the old political order.</p>
            <h2>Public Reaction</h2>
            <p>Widespread protests occurred in the lead-up to the elections, with many citizens boycotting the vote, demanding a complete change of the political system.</p>
            <h2>Results and Aftermath</h2>
            <p>The elections resulted in the victory of Abdelmadjid Tebboune, but the legitimacy of the process was questioned, leading to ongoing protests and calls for reform.</p>
            <h2>Legacy of the Elections</h2>
            <p>The December 2019 elections marked a significant chapter in Algeria's political landscape, highlighting the continuing struggle for democracy and citizen engagement in governance.</p>
        `,
    },
    {
        id: 22,
        from: new Date("2020-03-01"),
        to: new Date("2021-01-01"),
        name: "COVID-19 Pandemic in Algeria",
        description:
            "The pandemic impacts health and the economy, complicating political challenges.",
        image: "",
        category: "health",
        color: categoryColorMap["health"],
        article: `
            <h1>COVID-19 Pandemic in Algeria</h1>
            <h2>Initial Outbreak and Response</h2>
            <p>The COVID-19 pandemic reached Algeria in early March 2020, leading to a public health crisis that strained the country’s healthcare system and exacerbated existing economic challenges.</p>
            <h2>Government Measures</h2>
            <p>The Algerian government implemented lockdown measures, restricted movement, and initiated public health campaigns to combat the virus's spread, though the effectiveness varied.</p>
            <h2>Social and Economic Impact</h2>
            <p>The pandemic severely impacted the economy, leading to job losses and increased poverty levels, while also heightening public dissatisfaction with the government’s response.</p>
            <h2>Public Health Challenges</h2>
            <p>Healthcare facilities faced significant challenges, including shortages of medical supplies and personnel, further complicating the government’s ability to manage the crisis.</p>
            <h2>Long-term Effects</h2>
            <p>The COVID-19 pandemic has lasting implications for Algeria, influencing political discourse, health policy, and economic strategies as the nation seeks to recover.</p>
        `,
    },
    {
        id: 26,
        from: new Date("1972-08-26"),
        to: new Date("1972-09-11"),
        name: "1972 Munich Olympics",
        description:
            "The 1972 Summer Olympics in Munich were overshadowed by the tragic terrorist attack on the Israeli team.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>1972 Munich Olympics</h1>
            <h2>Tragic Events</h2>
            <p>The games were marred by the Munich massacre, where 11 Israeli athletes were taken hostage and killed by a Palestinian terrorist group.</p>
            <h2>Notable Athletes</h2>
            <p>Mark Spitz won seven gold medals in swimming, setting a record for the most golds in a single Olympics.</p>
            <h2>Public Reaction</h2>
            <p>The tragedy cast a shadow over the games, leading to increased security measures in future Olympics.</p>
            <h2>Legacy</h2>
            <p>The 1972 Munich Olympics are remembered for both the athletic achievements and the tragic loss of life.</p>
        `,
    },
    {
        id: 27,
        from: new Date("1980-07-19"),
        to: new Date("1980-08-03"),
        name: "1980 Moscow Olympics",
        description:
            "The 1980 Summer Olympics in Moscow were marked by a significant boycott led by the United States.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>1980 Moscow Olympics</h1>
            <h2>Political Context</h2>
            <p>The United States led a boycott of the Moscow Olympics in protest of the Soviet invasion of Afghanistan, with over 60 countries joining.</p>
            <h2>Notable Athletes</h2>
            <p>Despite the boycott, athletes from participating countries delivered memorable performances.</p>
            <h2>Public Reaction</h2>
            <p>The boycott highlighted the intersection of politics and sports, with mixed reactions from the global community.</p>
            <h2>Legacy</h2>
            <p>The 1980 Moscow Olympics are remembered for the political tensions and the impact of the boycott on the games.</p>
        `,
    },
    {
        id: 29,
        from: new Date("1996-07-19"),
        to: new Date("1996-08-04"),
        name: "1996 Atlanta Olympics",
        description:
            "The 1996 Summer Olympics in Atlanta, USA, were notable for the Centennial Olympic Park bombing and the dominance of American athletes.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>1996 Atlanta Olympics</h1>
            <h2>Tragic Events</h2>
            <p>The games were marred by a bombing at Centennial Olympic Park, resulting in two deaths and over 100 injuries.</p>
            <h2>Notable Athletes</h2>
            <p>Michael Johnson set a world record in the 200 meters, and the USA women's gymnastics team won their first team gold.</p>
            <h2>Public Reaction</h2>
            <p>The bombing cast a shadow over the games, but the athletic achievements were widely celebrated.</p>
            <h2>Legacy</h2>
            <p>The 1996 Atlanta Olympics are remembered for both the tragic bombing and the remarkable performances by athletes.</p>
        `,
    },
    {
        id: 30,
        from: new Date("2000-09-15"),
        to: new Date("2000-10-01"),
        name: "2000 Sydney Olympics",
        description:
            "The 2000 Summer Olympics in Sydney, Australia, were praised for their organization and the performances of athletes from around the world.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>2000 Sydney Olympics</h1>
            <h2>Notable Athletes</h2>
            <p>Cathy Freeman lit the Olympic flame and won gold in the 400 meters, symbolizing reconciliation in Australia.</p>
            <h2>Public Reaction</h2>
            <p>The games were widely praised for their organization and the friendly atmosphere.</p>
            <h2>Legacy</h2>
            <p>The 2000 Sydney Olympics are remembered as one of the best-organized and most successful games in history.</p>
        `,
    },
    {
        id: 31,
        from: new Date("2008-08-08"),
        to: new Date("2008-08-24"),
        name: "2008 Beijing Olympics",
        description:
            "The 2008 Summer Olympics in Beijing, China, were notable for their grand opening ceremony and the dominance of Chinese athletes.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>2008 Beijing Olympics</h1>
            <h2>Opening Ceremony</h2>
            <p>The opening ceremony was a spectacular display of Chinese culture and technological prowess.</p>
            <h2>Notable Athletes</h2>
            <p>Michael Phelps won eight gold medals in swimming, breaking the record for the most golds in a single Olympics.</p>
            <h2>Public Reaction</h2>
            <p>The games were praised for their organization and the impressive performances of athletes.</p>
            <h2>Legacy</h2>
            <p>The 2008 Beijing Olympics are remembered for their grand scale and the dominance of Chinese and American athletes.</p>
        `,
    },
    {
        id: 32,
        from: new Date("2012-07-27"),
        to: new Date("2012-08-12"),
        name: "2012 London Olympics",
        description:
            "The 2012 Summer Olympics in London, UK, were celebrated for their successful organization and the performances of athletes from around the world.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>2012 London Olympics</h1>
            <h2>Opening Ceremony</h2>
            <p>The opening ceremony celebrated British culture and history, featuring performances by famous British artists.</p>
            <h2>Notable Athletes</h2>
            <p>Usain Bolt defended his titles in the 100 meters and 200 meters, solidifying his status as the fastest man in the world.</p>
            <h2>Public Reaction</h2>
            <p>The games were widely praised for their organization and the friendly atmosphere.</p>
            <h2>Legacy</h2>
            <p>The 2012 London Olympics are remembered as one of the best-organized and most successful games in history.</p>
        `,
    },
    {
        id: 33,
        from: new Date("2016-08-05"),
        to: new Date("2016-08-21"),
        name: "2016 Rio de Janeiro Olympics",
        description:
            "The 2016 Summer Olympics in Rio de Janeiro, Brazil, were notable for their vibrant atmosphere and the challenges faced by the host city.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>2016 Rio de Janeiro Olympics</h1>
            <h2>Challenges</h2>
            <p>The games faced challenges such as economic difficulties, political instability, and concerns about the Zika virus.</p>
            <h2>Notable Athletes</h2>
            <p>Simone Biles won four gold medals in gymnastics, and Usain Bolt completed his "triple-triple" by winning gold in the 100 meters, 200 meters, and 4x100 meters relay for the third consecutive Olympics.</p>
            <h2>Public Reaction</h2>
            <p>The games were celebrated for their vibrant atmosphere and the remarkable performances by athletes.</p>
            <h2>Legacy</h2>
            <p>The 2016 Rio de Janeiro Olympics are remembered for their challenges and the outstanding achievements of athletes.</p>
        `,
    },
    {
        id: 34,
        from: new Date("2021-07-23"),
        to: new Date("2021-08-08"),
        name: "2020 Tokyo Olympics",
        description:
            "The 2020 Summer Olympics in Tokyo, Japan, were postponed to 2021 due to the COVID-19 pandemic and were held without spectators.",
        image: "",
        category: "sports",
        color: categoryColorMap["sports"],
        article: `
            <h1>2020 Tokyo Olympics</h1>
            <h2>Pandemic Impact</h2>
            <p>The games were postponed by a year and held without spectators due to the COVID-19 pandemic, creating a unique and unprecedented atmosphere.</p>
            <h2>Notable Athletes</h2>
            <p>Caeleb Dressel won five gold medals in swimming, and Simone Biles made headlines for prioritizing her mental health.</p>
            <h2>Public Reaction</h2>
            <p>The games were praised for their organization despite the challenges posed by the pandemic.</p>
            <h2>Legacy</h2>
            <p>The 2020 Tokyo Olympics are remembered for their resilience and the focus on athlete mental health.</p>
        `,
    },
].sort((a, b) => a.category.localeCompare(b.category))

export {events as default}
