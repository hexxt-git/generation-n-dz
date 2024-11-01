export async function load() {
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

    const events: Event[] = [
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
        },
        {
            id: 12,
            from: new Date("1992-01-11"),
            to: new Date("2002-02-08"),
            name: "Algerian Civil War",
            description:
                "The military cancels elections, sparking a civil war.",
            image: "",
            category: "war",
            color: categoryColorMap["war"],
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
        },
        {
            id: 15,
            from: new Date("2001-04-01"),
            to: new Date("2001-06-14"),
            name: "Black Spring Protests",
            description:
                "Protests in Kabylie demand cultural rights and autonomy.",
            image: "",
            category: "social",
            color: categoryColorMap["social"],
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
        },
        {
            id: 19,
            from: new Date("2014-04-17"),
            to: new Date("2014-04-17"),
            name: "Bouteflika's Fourth Term",
            description:
                "Bouteflika is elected for a fourth term amid protests.",
            image: "",
            category: "politics",
            color: categoryColorMap["politics"],
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
        },
        {
            id: 21,
            from: new Date("2019-12-12"),
            to: new Date("2019-12-12"),
            name: "Presidential Elections",
            description:
                "Presidential elections held amid protests and boycotts.",
            image: "",
            category: "politics",
            color: categoryColorMap["politics"],
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
        },
    ];

    return {events}
}
