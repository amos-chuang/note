declare module NodeJS {
    interface Global {
        isDbConnected: boolean;
        kibanaSearchKeyword: string;
    }
}