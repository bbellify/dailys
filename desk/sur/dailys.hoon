|%
+$  daily-key   @tas
+$  completed   @da
:: +$  daily       [daily-key completed]
:: +$  dailyslist      (list daily)
:: poke action types
+$  action
  $%  [%complete =daily-key]
      [%add =daily-key]
      [%del =daily-key]
  ==
:: update for json types
+$  update
  $%  [%dailys =dailysmap]
      action
  ==
:: 
+$  dailysmap  (map daily-key completed)
--