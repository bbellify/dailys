/-  *dailys
|%
++  dejs-action  !!
  :: =,  dejs:format
  :: |=  jon=json
  :: ^-  action
  :: %.  jon
  :: %-  of  !!
  :: :: :~  [%complete (ot ~[website+so username+so password+so])]
  :: ::     [%add (ot ~[id+ni website+so username+so password+so])]
  :: ::     [%del (ot ~[id+ni])]
  :: :: ==
::
++  enjs-update
  =,  enjs:format
  |=  upd=update
  ^-  json
  |^
  ?-  -.upd
           %complete  !!
           %add  !!
           %del  !!
           %dailys  (frond 'dailys' a+(turn ~(tap by dailysmap.upd) dailys))
  ==
  ++  dailys
    |=  daily=[@tas @da]
    (frond `@t`-.daily (time +.daily))
  --
--
