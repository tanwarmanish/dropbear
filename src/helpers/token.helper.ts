
// regex
const WHITE_SPACE_REGEX = /\s+/;

export const isWhitespace = (str)=>{
    return str.test(WHITE_SPACE_REGEX);
};