declare enum job_t {
  bishop = 5,
  samurai = 4,
  mage = 1,
  lord = 7,
  priest = 2,
  thief = 3,
  ninjya = 6,
  fighter = 0
}
declare namespace job_t {
  function description(param: job_t): string ;
}
declare enum race_t {
  gnome = 3,
  elf = 1,
  hobbit = 4,
  dwarf = 2,
  human = 0
}
declare namespace race_t {
  function description(param: race_t): string ;
}
declare enum status_t {
  vitality = 3,
  magicPoint = 1,
  strength = 2,
  agility = 4,
  hitPoint = 0,
  piety = 6,
  luck = 7,
  intelligence = 5
}
declare namespace status_t {
  function description(param: status_t): string ;
}
declare enum attr_t {
  good = 0,
  evil = 2,
  neutral = 1
}
declare namespace attr_t {
  function description(param: attr_t): string ;
}
