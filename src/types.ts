export type MatchOCG = {
	'1'?: { OC?: MatchOCGOC; MBS?: string };
	'2'?: { OC?: MatchOCGOC; MBS?: string };
	'5'?: { OC?: MatchOCGOC; MBS?: string };
};

export type MatchOCGOC = {
	'0'?: MatchOC;
	'1'?: MatchOC;
	'2'?: MatchOC;
	'3'?: MatchOC;
	'4'?: MatchOC;
	'5'?: MatchOC;
	'25'?: MatchOC;
	'26'?: MatchOC;
};

export type MatchOC = {
	N?: string;
	O?: string;
};

export interface Match {
	C: string;
	D: string;
	DAY: string;
	HEC: boolean;
	IMF: boolean;
	LN: string;
	N: string;
	NID: string;
	OCG: MatchOCG;
	S: string;
	T: string;
	TYPE: string;
}
