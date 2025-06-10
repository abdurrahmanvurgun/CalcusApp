// utils/calculate.ts

export const calculate = (input: string): number => {
  try {
    if (!input || input.trim() === '') return 0;

    // "x" karakterini "*" ile değiştir
    const sanitizedInput = input.replace(/x/g, '*');

    // Yalnızca geçerli karakterlere izin ver (sayılar, +, -, *, /, ., parantez)
    if (!/^[\d+\-*/.() ]+$/.test(sanitizedInput)) {
      throw new Error('Geçersiz karakter');
    }

    // Güvenli hesaplama
    const result = Function(`return (${sanitizedInput})`)();

    return isNaN(result) ? 0 : result;
  } catch (error) {
    console.error('Hesaplama hatası:', error);
    return 0;
  }
};

export const formatNumber = (num: number): string => {
  return Number.isNaN(num) ? '0' : num.toLocaleString('tr-TR', { maximumFractionDigits: 2 });
};
