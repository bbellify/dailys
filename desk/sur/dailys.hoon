|%
+$  daily-key   @tas
+$  completed   @da
:: poke action types
+$  action
  $%  [%complete =daily-key]
      [%add =daily-key]
      [%del =daily-key]
      [%undo =daily-key]
  ==
:: update for json types
+$  update
  $%  [%dailys =dailysmap]
      action
  ==
:: 
+$  dailysmap  (map daily-key completed)
--