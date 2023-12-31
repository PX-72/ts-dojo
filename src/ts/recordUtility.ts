type CatInfo = {
    age: number;
    breed: string;
};

const s = Symbol('blah');
type CatName = 'muffin' | 'boris' | 'mordred';
type CatName2 = 1 | 2 | 3;

type Cat2 = Record<CatName, CatInfo>

type RecordMap<Key extends string, Type> = {
    [K in Key]: Type
};

type Cat =  RecordMap<CatName, CatInfo>;

const cats: Cat = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
};