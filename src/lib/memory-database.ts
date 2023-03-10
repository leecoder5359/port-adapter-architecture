export type Member = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
export const MemoryDatabase = (() => {
    const members = [
        {
            id: 1,
            name: "J",
            email: "j@gmail.com",
            phone: "010-1234-5678"
        },
        {
            id: 2,
            name: "A",
            email: "A@gmail.com",
            phone: "010-1234-5678"
        }
    ] as Member[];

    return {
        findMembers: () => Promise.resolve(members)
    }
})()