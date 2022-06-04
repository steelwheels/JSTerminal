declare enum attr_t {
  good = 0,
  neutral = 1,
  evil = 2
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  lord = 7,
  mage = 1,
  thief = 3,
  priest = 2,
  fighter = 0,
  ninjya = 6,
  bishop = 5,
  samurai = 4
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  human = 0,
  dwarf = 2,
  elf = 1,
  gnome = 3,
  hobbit = 4
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  intelligence = 5,
  piety = 6,
  agility = 4,
  magicPoint = 1,
  hitPoint = 0,
  strength = 2,
  luck = 7,
  vitality = 3
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
