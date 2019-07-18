export interface WorkPosition {
    name: string;
    company: string;
    netWage: number;
    workloadSize: number;
    overtimeBonus: number;
}

export const Profinit: WorkPosition = {
    name: 'Junior consultant',
    company: 'Profinit',
    netWage: 38000,
    workloadSize: 0.8,
    overtimeBonus: 1.5
};
