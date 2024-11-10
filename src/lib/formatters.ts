const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
});

export const formatCurrency = (amount: number) => CURRENCY_FORMATTER.format(amount);

const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');

export const formatNumber = (number: number) => NUMBER_FORMATTER.format(number);