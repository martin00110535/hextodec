/*********************************************************
  "Bits" custom blocks, courtesy of Javier Piay (12-2017)
 *********************************************************/

enum digit_value {
    //% block="zero"
    zero,
    //% block="one"
    one,
    //% block="complement"
    com
}

//% weight=100 color=#0fbc11 icon="\uf10c"
namespace Bits {
    //% blockId="id_pow" block="%op1 | raised to %op2"
    export function fn_raiseto(base: number, exp: number): number {
        return Math.pow(base, exp)
    }
    //% blockId="id_getbit" block="get bit %op1 | in %op2"
    export function fn_getbit(pos: number, num: number): number {
        return (num >> pos) & 1
    }
    //% blockId="id_setbit" block="set bit %op1 | in %op2 | to %d"
    export function fn_setbit(pos: number, num: number, dv: digit_value): number {
        if (dv == digit_value.zero)
            return num & ((1 << pos) ^ 0xffff)
        else if (dv == digit_value.one)
            return num | (1 << pos)
        else
            return num ^ (1 << pos)
    }

    let hex_arr = "0123456789abcdef"
    let dec_num = 0

    //% blockId="id_hextodec" block="convert hexadecimal %hex_num | to decimal"
    export function fn_HextoDec(hex_num: string): number {
        dec_num = 0
        for (let index = 0; index <= hex_num.length - 1; index++) {
            let char = hex_num.charAt(hex_num.length - 1 - index)
            for (let index2 = 0; index2 <= 15; index2++) {
                if (char.compare(hex_arr.charAt(index2)) == 0) {
                    dec_num = dec_num + index2 * Math.pow(16, index)
                }
            }
        }
        return dec_num
    }
}
