/-  *dailys
|%
++  dejs-action
  =,  dejs:format
  |=  jon=json
  ^-  action
  %.  jon
  %-  of
  :~  [%complete (ot ~[daily-key+so])]
      [%add (ot ~[daily-key+so])]
      [%del (ot ~[daily-key+so])]
      [%undo (ot ~[daily-key+so])]
  ==
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
           %undo  !!
           %dailys  (frond 'dailys' a+(turn ~(tap by dailysmap.upd) dailys))
  ==
  ++  dailys
    |=  daily=[@tas @da]
    (frond `@t`-.daily (time +.daily))
  --
--
