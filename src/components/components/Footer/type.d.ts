type SocialNet = {
    icon: string,
    link: string
};

export type ContactsBlock = {
    title: string,
    phoneBlock: {
        title: string,
        phoneNumber: string
    },
    addressBlock: {
        title: string,
        address: string
    },
    socialNets: Array<SocialNet> | null
};