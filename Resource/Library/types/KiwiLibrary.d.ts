/**
 * Builtin.d.ts
 */

interface _Color {
	red:			number ;
	green:			number ;
	blue:			number ;
	alpha:			number ;

        toString():             string ;
}

interface _Console {
	log(message: string): void ;
	print(message: string): void ;
	error(message: string): void ;
}

interface _ColorManager {
        black:          _Color ;
        red:            _Color ;
        green:          _Color ;
        yellow:         _Color ;
        blue:           _Color ;
        magenta:        _Color ;
        cyan:           _Color ;
        white:          _Color ;
}

interface _Curses {
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

interface _Dictionary {
	set(name: string, value: any): void ;
	get(name: string): any | null ;
}

interface _EscapeCode {
        backspace():                    string ;
	delete():                       string ;

	cursorUp(delta: number): string
	cursorDown(delta: number): string
	cursorForward(delta: number): string
	cursorBackward(delta: number): string
	cursorNextLine(delta: number): string
	cursorPreviousLine(delta: number): string
	cursorMoveTo(y: number, x: number): string

	saveCursorPosition(): string
	restoreCursorPosition(): string

	eraceFromCursorToEnd(): string
	eraceFromCursorToBegin(): string
	eraceEntireBuffer(): string
	eraceFromCursorToRight(): string
	eraceFromCursorToLeft(): string
	eraceEntireLine(): string

	scrollUp(lines: number): string
	scrollDown(lines: number): string

	color(type: number, color: number): string
	reset(): string
}

interface _ExitCode {
	noError:		number ;
	internalError:		number ;
	commaneLineError:	number ;
	syntaxError:		number ;
	exception:		number ;
}

interface _File {
	getc(): string ;
	getl(): string ;
	put(str: string): void ;
	close(): void ;
}

interface _FileType {
	notExist:	number ;
	file:		number ;
	directory:	number ;
}

interface _Pipe {
        reading:        _File ;
        writing:        _File ;
}

interface _Point {
	x : number ;
	y : number ;
} 

interface _Rect {
	x:		number ;
	y: 		number ;
	width:		number ;
	height:		number ;
} 

interface _Size {
	width:		number ;
	height:		number ;
}

/* KLGraphicsContext in swift */
interface _GraphicsContext {
	logicalFrame:	_Rect ;

	setFillColor(col: _Color): void ;
	setStrokeColor(col: _Color): void ;
	setPenSize(size: number): void ;
	moveTo(x: number, y: number): void ;
	lineTo(x: number, y: number): void ;
	circle(x: number, y: number, rad: number): void ;
}

interface _Process {
	isRunning:	boolean ;
	didFinished:	boolean ;
	exitCode:	number ;
	terminate(): void ;
}

interface _URL {
	isNull:			boolean ;
	absoluteString:		string ;
	path:			string ;
	appendingPathComponent(comp: string): _URL | null ;
	loadText():		string | null ;
}

interface ContactRecordIF {
	fieldCount:		number ;
	fieldName:		string[] ;

	value(name: string): any ;
	setValue(val: any, name: string): boolean ;
	save(): 		boolean ;
}

interface ContactDatabaseIF {
	recordCount:		number ;

	authorize(callback: (granted: boolean) => void): void
	load(url: _URL | null): boolean ;

	newRecord(): ContactRecordIF ;
	record(index: number): ContactRecordIF | null ;
        append(record: ContactRecordIF): void ;
	forEach(callback: (record: ContactRecordIF) => void): void ;

	save():			boolean ;
}

declare var console:		_Console ;
declare var Color:      	_ColorManager ;
declare var Curses:     	_Curses ;
declare var EscapeCode: 	_EscapeCode ;
declare var ExitCode:		_ExitCode ;
declare var FileType:		_FileType ;
declare var Contacts:	        ContactDatabaseIF ;

declare function Dictionary(): _Dictionary ;
declare function Pipe(): _Pipe ;
declare function Point(x: number, y: number): _Point ;
declare function Rect(x: number, y: number, width: number, height: number): _Rect ;
declare function Size(width: number, height: number): _Size ;

declare function isArray(value: any): boolean ;
declare function isBitmap(value: any): boolean ;
declare function isBoolean(value: any): boolean ;
declare function isDate(value: any): boolean ;
declare function isNull(value: any): boolean ;
declare function isNumber(value: any): boolean ;
declare function isObject(value: any): boolean ;
declare function isPoint(value: any): boolean ;
declare function isRect(value: any): boolean ;
declare function isSize(value: any): boolean ;
declare function isString(value: any): boolean ;
declare function isUndefined(value: any): boolean ;
declare function isURL(value: any): boolean ;
declare function isEOF(value: any): boolean ;

declare function asciiCodeName(code: number): string | null ;

declare function sleep(sec: number): boolean ;

declare function _openPanel(title: string, type: number,
					exts: string[], cbfunc: any): void ;
declare function _savePanel(title: string, cbfunc: any): void ;
declare function _run(path: _URL | string, input: _File, output: _File,
					error: _File): object | null ;

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
    forEach(childFunc: (value: any, index: _Point) => void): void;
    forEachColumn(x: number, childFunc: (value: any, y: number) => void): void;
    forEachRow(y: number, childFunc: (value: any, x: number) => void): void;
    find(findFunc: (value: any, index: _Point) => boolean): void;
    findIndex(findFunc: (value: any, index: _Point) => boolean): _Point;
    map(mapFunc: (value: any, index: _Point) => any): Table;
    toStrings(elm2str: (value: any, index: _Point) => any): string[];
}
/// <reference path="Builtin.d.ts" />
declare class File {
    mCore: _File;
    constructor(core: _File);
    getc(): string;
    getl(): string;
    put(str: string): void;
}
declare var _stdin: _File;
declare var _stdout: _File;
declare var _stderr: _File;
declare const stdin: File;
declare const stdout: File;
declare const stderr: File;
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
declare function addPoint(p0: _Point, p1: _Point): _Point;
declare function isSamePoints(p0: _Point, p1: _Point): boolean;
declare function clampPoint(src: _Point, x: number, y: number, width: number, height: number): _Point;
/// <reference path="Builtin.d.ts" />
declare function _waitUntilExitOne(process: _Process): number;
declare function _waitUntilExitAll(processes: _Process[]): number;
declare class Semaphore {
    mValue: _Dictionary;
    constructor(initval: number);
    signal(): void;
    wait(): void;
}
declare class CancelException extends Error {
    code: number;
    constructor(code: number);
}
declare function _cancel(): void;
declare function openPanel(title: string, type: number, exts: string[]): _URL | null;
declare function savePanel(title: string): _URL | null;
declare function run(path: _URL | string | null, input: _File, output: _File, error: _File): object | null;
/// <reference path="Builtin.d.ts" />
declare function maxLengthOfStrings(strs: string[]): number;
declare function adjustLengthOfStrings(strs: string[]): string[];
declare function pasteStrings(src0: string[], src1: string[], space: string): string[];
/// <reference path="Builtin.d.ts" />
declare class CFrame {
    mFrame: _Rect;
    mCursorX: number;
    mCursorY: number;
    mForegroundColor: number;
    mBackgroundColor: number;
    constructor(frame: _Rect);
    get frame(): _Rect;
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
    mContext: _GraphicsContext;
    mCurrentX: number;
    mCurrentY: number;
    mCurrentAngle: number;
    mMovingAngle: number;
    mMovingDistance: number;
    mPenSize: number;
    mHistory: TurtleStatus[];
    constructor(ctxt: _GraphicsContext);
    setup(x: number, y: number, angle: number, pen: number): void;
    get logicalFrame(): _Rect;
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
