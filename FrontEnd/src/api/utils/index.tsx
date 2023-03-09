export const isStatusOk = (status: number | null | undefined): boolean => {
    const OK = 200;
    const POST = 201;
    const NORESP = 204;

    return (OK === status) || (POST === status) || (NORESP === status);
};