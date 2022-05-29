declare enum Weekday {
  tue = 2,
  mon = 1,
  sun = 0
}
declare namespace Weekday {
  function description(param: Weekday): string ;
}
