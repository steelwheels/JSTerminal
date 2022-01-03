/**
 * Builtin.d.ts
 */

interface ValueTypeIF {
	nullType:		number ;
	boolType:		number ;
	numberType:		number ;
	stringType:		number ;
	dateType:		number ;
	rangeType:		number ;
	pointType:		number ;
	sizeType:		number ;
	rectType:		number ;
	enumType:		number ;
	dictionaryType:		number ;
	arrayType:		number ;
	URLType:		number ;
	colorType:		number ;
	imageType:		number ;
	objectType:		number ;
}

interface ColorIF {
	red:			number ;
	green:			number ;
	blue:			number ;
	alpha:			number ;

        toString():             string ;
}

interface ConsoleIF {
	log(message: string): void ;
	print(message: string): void ;
	error(message: string): void ;
}

interface ColorManagerIF {
        black:          ColorIF ;
        red:            ColorIF ;
        green:          ColorIF ;
        yellow:         ColorIF ;
        blue:           ColorIF ;
        magenta:        ColorIF ;
        cyan:           ColorIF ;
        white:          ColorIF ;
}

interface CursesIF {
        minColor:	number ;
        maxColor:       number ;
        black:          number ;
        red:            number ;
        green:          number ;
        yellow:         number ;
        blue:           number ;
        magenta:        number ;
        cyan:           number ;
        white:          number ;

        begin(): void ;
        end(): void ;

        width:                  number ;
        height:                 number ;

        foregroundColor:        number ;
        backgroundColor:        number ;

	moveTo(x: number, y: number): boolean ;
	inkey(): string | null ;

	put(str: string): void ;
	fill(x: number, y: number, width: number, height: number, c: string): void ;
}

interface DictionaryIF {
	set(name: string, value: any): void ;
	get(name: string): any | null ;
}

interface EscapeCodeIF {
        backspace():                    string ;
	delete():                       string ;

	cursorUp(delta: number): string ;
	cursorDown(delta: number): string ;
	cursorForward(delta: number): string ;
	cursorBackward(delta: number): string ;
	cursorNextLine(delta: number): string ;
	cursorPreviousLine(delta: number): string ;
	cursorMoveTo(y: number, x: number): string ;

	saveCursorPosition(): string ;
	restoreCursorPosition(): string ;

	eraceFromCursorToEnd(): string ;
	eraceFromCursorToBegin(): string ;
	eraceEntireBuffer(): string ;
	eraceFromCursorToRight(): string ;
	eraceFromCursorToLeft(): string ;
	eraceEntireLine(): string ;

	scrollUp(lines: number): string ;
	scrollDown(lines: number): string ;

	color(type: number, color: number): string ;
	bold(flag: boolean): string ;

	reset(): string
}

interface ExitCodeIF {
	noError:		number ;
	internalError:		number ;
	commaneLineError:	number ;
	syntaxError:		number ;
	exception:		number ;
}

interface FileIF {
	getc(): string ;
	getl(): string ;
	put(str: string): void ;
	close(): void ;
}

interface FileTypeIF {
	notExist:	number ;
	file:		number ;
	directory:	number ;
}

interface PipeIF {
        reading:        FileIF ;
        writing:        FileIF ;
}

interface PointIF {
	x : number ;
	y : number ;
} 

interface RectIF {
	x:		number ;
	y: 		number ;
	width:		number ;
	height:		number ;
} 

interface SizeIF {
	width:		number ;
	height:		number ;
}

interface TextIF
{
        core(): any ;
	toString(): string ;
}

interface TextLineIF extends TextIF
{
        set(str: string): void ;
	append(str: string): void ;
	prepend(str: string): void ;
}

interface TextSectionIF extends TextIF
{
	contentCount: number ;
	
	add(text: TextIF): void ;
	insert(text: TextIF): void ;
	append(str: string): void ;
	prepend(str: string): void ;
}

interface TextRecordIF extends TextIF
{
        columnCount: number ;
	columns: number ;
        append(str: string): void ;
	prepend(str: string): void ;
}

interface TextTableIF extends TextIF
{
        count: number ;
        records: TextRecordIF[] ;

        add(rec: TextRecordIF): void ;
        inert(rec: TextRecordIF): void ;
	append(str: string): void ;
        prepend(str: string): void ;
}

interface ImageIF {
	size: SizeIF ;
}

/* KLGraphicsContext in swift */
interface GraphicsContextIF {
	logicalFrame:	RectIF ;

	setFillColor(col: ColorIF): void ;
	setStrokeColor(col: ColorIF): void ;
	setPenSize(size: number): void ;
	moveTo(x: number, y: number): void ;
	lineTo(x: number, y: number): void ;
	rect(x: number, y: number, width: number, height: number, dofill: boolean): void ;
	circle(x: number, y: number, rad: number, dofill: boolean): void ;
}

interface BitmapIF
{
	width:		number ;
	height:		number ;

	get(x: number, y: number): ColorIF ;
	set(x: number, y: number, color: ColorIF): void ;
}

interface ProcessIF {
	isRunning:	boolean ;
	didFinished:	boolean ;
	exitCode:	number ;
	terminate(): void ;
}

interface URLIF {
	isNull:			boolean ;
	absoluteString:		string ;
	path:			string ;
	appendingPathComponent(comp: string): URLIF | null ;
	loadText():		string | null ;
}

interface ValueStorageIF {
	value(path: [string]): any ;
	set(value: any, path: [string]): boolean ;
}

interface SymbolsIF {
	characterA:		URLIF ;
	chevronBackward:	URLIF ;
	chevronForward:		URLIF ;
	handRaised:		URLIF ;
	line1P:			URLIF ;
	line2P:			URLIF ;
	line4P:			URLIF ;
	line8P:			URLIF ;
	line16P:		URLIF ;
	paintbrush:		URLIF ;
	questionmark:		URLIF ;

	oval(filled: boolean):   URLIF ;
	pencil(filled: boolean): URLIF ;
	rectangle(filled: boolean, rounded: boolean): URLIF ;
}

interface ContactRecordIF {
	fieldCount:		number ;
	fieldNames:		string[] ;
	filledFieldNames:	string[] ;

	type: 			string ;

	givenName:		string | null ;
	middleName:		string | null ;
	familyName:		string | null ;

	jobTitle:		string | null ;
	organizationName:	string | null ;
	departmentName:		string | null ;

	postalAddresses:	{[name:string]: string} | null ;
	emailAddresses:		{[name:string]: string} | null ;
	urlAddresses:		{[name:string]: string} | null ;

	value(name: string): any ;
	setValue(val: any, name: string): boolean ;
}

interface ContactDatabaseIF {
	recordCount:		number ;

	authorize(callback: (granted: boolean) => void): void
	load(url: URLIF | null): boolean ;

	newRecord(): ContactRecordIF ;
	record(index: number): ContactRecordIF | null ;
        append(record: ContactRecordIF): void ;
	forEach(callback: (record: ContactRecordIF) => void): void ;
}

interface CollectionIF {
	sectionCount:			number ;
	itemCount(section: number):	number ;

	header(section: number): string | null ;
	footer(section: number): string | null ;

	value(section: number, item: number): URLIF | null ;
	add(header: string, footer: string, item: URLIF[]): void ;

	toStrings(): string[] ;
}

/* Enum */
declare var ValueType:		ValueTypeIF ;

/* Singleton object*/
declare var console:		ConsoleIF ;
declare var Color:      	ColorManagerIF ;
declare var Curses:     	CursesIF ;
declare var EscapeCode: 	EscapeCodeIF ;
declare var ExitCode:		ExitCodeIF ;
declare var FileType:		FileTypeIF ;
declare var Contacts:	        ContactDatabaseIF ;
declare var Symbols:		SymbolsIF ;

declare function valueType(val: any): number ; // the result defined as enum ValueType

declare function Dictionary(): DictionaryIF ;
declare function Pipe(): PipeIF ;
declare function Point(x: number, y: number): PointIF ;
declare function Rect(x: number, y: number, width: number, height: number): RectIF ;
declare function Size(width: number, height: number): SizeIF ;
declare function Collection(): CollectionIF ;
declare function URL(path: string): URLIF | null ;
declare function ValueStorage(path: string): ValueStorageIF | null ;

declare function isArray(value: any): boolean ;
declare function isBitmap(value: any): boolean ;
declare function isBoolean(value: any): boolean ;
declare function isDate(value: any): boolean ;
declare function isNull(value: any): boolean ;
declare function isNumber(value: any): boolean ;
declare function isDictionary(value: any): boolean ;
declare function isObject(value: any): boolean ;
declare function isPoint(value: any): boolean ;
declare function isRect(value: any): boolean ;
declare function isSize(value: any): boolean ;
declare function isString(value: any): boolean ;
declare function isUndefined(value: any): boolean ;
declare function isURL(value: any): boolean ;
declare function isEOF(value: any): boolean ;

declare function toArray(value: any): any[] | null ;
declare function toBitmap(value: any): BitmapIF | null ;
declare function toBoolean(value: any): boolean | null ;
declare function toDate(value: any): object | null ;
declare function toNumber(value: any): number | null ;
declare function toDictionary(value: any): {[name:string]: any} | null ;
declare function toObject(value: any): object | null ;
declare function toPoint(value: any): PointIF | null ;
declare function toRect(value: any): RectIF | null ;
declare function toSize(value: any): SizeIF | null ;
declare function toString(value: any): string | null ;
declare function toURL(value: any): URLIF | null ;
declare function toText(value: any): TextIF ;

declare function asciiCodeName(code: number): string | null ;

declare function sleep(sec: number): boolean ;

declare function TextLine(str: string): TextLineIF ;
declare function TextSection(): TextSectionIF ;
declare function TextRecord(): TextRecordIF ;
declare function TextTable(): TextTableIF ;

declare function _openPanel(title: string, type: number,
					exts: string[], cbfunc: any): void ;
declare function _savePanel(title: string, cbfunc: any): void ;
declare function _run(path: URLIF | string, input: FileIF, output: FileIF, error: FileIF): object | null ;

declare function isEmptyString(str: string): boolean;
declare function isEmptyObject(obj: object): boolean;
/// <reference path="Builtin.d.ts" />
declare function Array1D(length: number, value: any): any[];
declare function Array2D(width: number, height: number, value: any): any[][];
declare class Table {
    mWidth: number;
    mHeight: number;
    mTable: any[][];
    get width(): number;
    get height(): number;
    constructor(width: number, height: number);
    isValid(x: number, y: number): boolean;
    element(x: number, y: number): any | null | undefined;
    setElement(x: number, y: number, value: any | null): void;
    fill(value: any | null): void;
    forEach(childFunc: (value: any, index: PointIF) => void): void;
    forEachColumn(x: number, childFunc: (value: any, y: number) => void): void;
    forEachRow(y: number, childFunc: (value: any, x: number) => void): void;
    find(findFunc: (value: any, index: PointIF) => boolean): void;
    findIndex(findFunc: (value: any, index: PointIF) => boolean): PointIF;
    map(mapFunc: (value: any, index: PointIF) => any): Table;
    toStrings(elm2str: (value: any, index: PointIF) => any): string[];
}
/// <reference path="Builtin.d.ts" />
declare class File {
    mCore: FileIF;
    constructor(core: FileIF);
    getc(): string;
    getl(): string;
    put(str: string): void;
}
declare var _stdin: FileIF;
declare var _stdout: FileIF;
declare var _stderr: FileIF;
declare const stdin: File;
declare const stdout: File;
declare const stderr: File;
interface JSONFileIF {
    read(file: FileIF): object | null;
    write(file: FileIF, src: object): boolean;
}
declare var _JSONFile: JSONFileIF;
declare class JSONFile {
    constructor();
    read(file: File): object | null;
    write(file: File, src: object): boolean;
}
interface Math {
    randomInt(min: number, max: number): number;
    clamp(src: number, min: number, max: number): number;
}
declare function int(value: number): number;
/**
 * Debug.ts
 */
/// <reference path="Builtin.d.ts" />
declare function checkVariables(place: string, ...vars: any[]): boolean;
/// <reference path="Builtin.d.ts" />
/// <reference path="Math.d.ts" />
declare function addPoint(p0: PointIF, p1: PointIF): PointIF;
declare function isSamePoints(p0: PointIF, p1: PointIF): boolean;
declare function clampPoint(src: PointIF, x: number, y: number, width: number, height: number): PointIF;
/// <reference path="Builtin.d.ts" />
declare function _waitUntilExitOne(process: ProcessIF): number;
declare function _waitUntilExitAll(processes: ProcessIF[]): number;
declare class Semaphore {
    mValue: DictionaryIF;
    constructor(initval: number);
    signal(): void;
    wait(): void;
}
declare class CancelException extends Error {
    code: number;
    constructor(code: number);
}
declare function _cancel(): void;
declare function openPanel(title: string, type: number, exts: string[]): URLIF | null;
declare function savePanel(title: string): URLIF | null;
declare function run(path: URLIF | string | null, input: FileIF, output: FileIF, error: FileIF): object | null;
/// <reference path="Builtin.d.ts" />
declare function maxLengthOfStrings(strs: string[]): number;
declare function adjustLengthOfStrings(strs: string[]): string[];
declare function pasteStrings(src0: string[], src1: string[], space: string): string[];
declare function isEqualTrimmedStrings(str0: string, str1: string): boolean;
/// <reference path="Builtin.d.ts" />
declare class CFrame {
    mFrame: RectIF;
    mCursorX: number;
    mCursorY: number;
    mForegroundColor: number;
    mBackgroundColor: number;
    constructor(frame: RectIF);
    get frame(): RectIF;
    get foregroundColor(): number;
    set foregroundColor(newcol: number);
    get backgroundColor(): number;
    set backgroundColor(newcol: number);
    fill(pat: string): void;
    moveTo(x: number, y: number): boolean;
    put(str: string): void;
}
/// <reference path="Builtin.d.ts" />
declare type TurtleStatus = {
    x: number;
    y: number;
    angle: number;
};
declare class Turtle {
    mContext: GraphicsContextIF;
    mCurrentX: number;
    mCurrentY: number;
    mCurrentAngle: number;
    mMovingAngle: number;
    mMovingDistance: number;
    mPenSize: number;
    mHistory: TurtleStatus[];
    constructor(ctxt: GraphicsContextIF);
    setup(x: number, y: number, angle: number, pen: number): void;
    get logicalFrame(): RectIF;
    get currentX(): number;
    get currentY(): number;
    get currentAngle(): number;
    get movingAngle(): number;
    set movingAngle(newval: number);
    get movingDistance(): number;
    set movingDistance(newval: number);
    get penSize(): number;
    set penSize(newval: number);
    forward(dodraw: boolean): void;
    turn(doright: boolean): void;
    push(): void;
    pop(): void;
    exec(commands: string): void;
}
/// <reference path="Builtin.d.ts" />
/// <reference path="Process.d.ts" />
declare function requestContactAccess(): boolean;
