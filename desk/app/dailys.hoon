/-  *dailys
/+  default-agent, dbug, agentio, dailys
|%
+$  versioned-state
  $%  state-0
  ==
+$  state-0  [%0 =dailysmap]
+$  card  card:agent:gall
--
%-  agent:dbug
=|  state-0
=*  state  -
^-  agent:gall
|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
    io    ~(. agentio bowl)
++  on-init
:: set default dailys on init
`this(dailysmap `(map daily-key completed)`(malt ~[[`daily-key`'guitar scales' *time] [`daily-key`'AG1' *time] [`daily-key`'run' *time] [`daily-key`'pushups' *time] [`daily-key`'vipassana' *time] [`daily-key`'install %dailys' now:bowl]]))
::
++  on-save
  ^-  vase
  !>(state)
::
++  on-load
  |=  old-vase=vase
  ^-  (quip card _this)
  `this(state !<(versioned-state old-vase))
::
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  ?>  =(our.bowl src.bowl)
  ?>  ?=(%dailys-action mark)
  =/  act  !<(action vase)
  ?-  -.act
      %complete  
    =/  newmap  (~(put by dailysmap) daily-key.act [now:bowl])
    :_   
      this(dailysmap newmap)
    [%give %fact ~[/updates] %dailys-update !>(`update`[%dailys newmap])]~
      ::
      %undo  
    =/  newmap  (~(put by dailysmap) daily-key.act [*time])
    :_   
      this(dailysmap newmap)
    [%give %fact ~[/updates] %dailys-update !>(`update`[%dailys newmap])]~
      ::
      %add
    =/  newmap  (~(put by dailysmap) daily-key.act [*time])
    :_   
      this(dailysmap newmap)
    [%give %fact ~[/updates] %dailys-update !>(`update`[%dailys newmap])]~
      ::
      %del
    =/  newmap  (~(del by dailysmap) daily-key.act)
    :_   
      this(dailysmap newmap)
    [%give %fact ~[/updates] %dailys-update !>(`update`[%dailys newmap])]~
      ::
 ==
::
++  on-watch
  |=  =path
  ^-  (quip card _this)
  ?>  ?=([%updates ~] path)
  :_  
    this
  [%give %fact ~ %dailys-update !>(`update`[%dailys dailysmap])]~
::
++  on-peek
  |=  =path
  ^-  (unit (unit cage))
  ?>  (team:title our.bowl src.bowl)
  ?+  path  (on-peek:def path)
      [%x %dailys ~]
    :^  ~  ~  %dailys-update
    !>  ^-  update
    [%dailys dailysmap]
   ==
++  on-leave  on-leave:def
++  on-agent  on-agent:def
++  on-arvo  on-arvo:def
++  on-fail  on-fail:def
--