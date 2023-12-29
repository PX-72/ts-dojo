type CatInfo = {
    age: number;
    breed: string;
};

type CatName = "miffy" | "boris" | "mordred";

type Cat2 = Record<CatName, CatInfo>

type RecordMap<Key extends keyof any, Type> = {
    [K in Key]: Type
};

type Cat =  RecordMap<CatName, CatInfo>;

const cats: Cat = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};