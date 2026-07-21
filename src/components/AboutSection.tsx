'use client';

import React from 'react';
import { BookOpen, Clock3, Heart, Scissors } from 'lucide-react';

const gisaPhoto =
  'data:image/webp;base64,' +
  'UklGRhomAABXRUJQVlA4IA4mAACw2wCdASrwAKoBPslYo0ynpSMrKtUdSWAZCWNAB6Uztx4EVKuhDHIPJ8KJcBLXEox/hsungRdB84K+LSy/vyTIDmPy17W9qfc7+w50ELJl0+adlVN4av/vZdGq9HZwlXwgqTyKQ8N+Co1KLVPU8gfXtK6h6/dQCNnGB8lLkzdrVQ3xmRZXH5wzZ+01fUa37oxT8X0w/MJJPFGzgpvd6MfMRYb5WlhHvJMW4l/8vp/pX/Sa4yj7SS7fG5F58exJdueWNNRXZOaKCeV0l8eVXoC/l7XFmMM1ixbrIMf/Sm+94bKl8cpDSwavgjjiuvFYJAmIgR7g3CCZx6GehvhYkFiHMDPoJF6Xi5GGohdT155tc7tOPoTPLhOrbi7utH32+2MXshTEmhACAeBaLEAr+ooCSQHke09gXt6S1F5GgLnTFrzF3CnCimZdukVYu1asbKN/gLD2gkFx5EDliVsoQ9mzARzJb3JBYmsPj2j7mQiiDBhCqoxjHuToquyxy1E6cF/f43iW+2qY6E1kGzHGrB3l2sRByRHaX8mB/WUusjwnwTxbm4jm/IDc1iWYEU2Bm0f/Q2DdSBjtXSYYUTYBHAk5CPj4LVGyG9BnpVU1SfnmkUZttgLqNGBrUJa37aw04BvemoH+7u3WlfQ0XBqcFjOMNpmMQV5OM0ZXpEQ038opRevfk+wpvBntDeK2EAP2ZWVN6EtPKrnCi75PNy5sSmNfgQaCAcevRCJEHHJi234T8yDZU1tzTXHtjnoWnBvFm0xDY0UPup1g6TMa/RxNvPRLxLVLZg5gkbTpAjHtdk321ZswDLvh7pmNUTwegvqewWcXIS3N0ePiscHXe0gT4W+ibzU3uEg4yrhmQPTWuWUCm/2XoZL31/pPx/uF3V6fzXdaAWEyp3FQGeqIrNf2l3WpyyepJevhaIowLD6lepUluIvNHBJAiDKlvp2BPXm/FDcK9Gkh+atiTbs9TGXbY/LwYT/zjjiIeLWbL7vbhSrcUrNoF9CNKKa0pATffqCubCNDv2LkotFIPoAklMFsmc+6moFkUxrSS3G6CdRLaq0uK1WoZWLDs75Mb0IR4UKGMOCRVmGZx74ZYUqRlbm+vRTmqxivevcPDWL8d4KXbkVaoJAWDQDm+tTWAeohezHqhsn+YFNz3wsKafEhCnikynKP4mW6atRshbslDa8KUV+gpVASl4bUFqqn6LBO/pF6JTM9L6IlWFyxxSzejifGlKck0qUMfsZvI5961njKFSkD+FdfQqbcfDfm2HYOqHm/T2j9Z+nHKGg/UD6NKhqagwfcFd23cLq1PmAqxuWEvAm6Rt0vUyLlzrH3vfPJHpXQJY3ZDwrSm/QIIk10yHJWxo9Cnqu11MLWPdwfhGHPtKhWhrI6lTdfp16n0Ja7M+GZvO7yLcUtmIjGAMgfmL//QZht9HYIBnjwDUIhKLFPJDNOK2MwbEZNB38qOrXcw7q8FMlvu6PWgCO58Unh9Pj9IxIDkjhb7aZi6zQE5pn0ege0coZEPJ/UzPsxTLbggBEnweAobGD9aL0wokZQcBtEJvykQaIRuUdi1+1pm6VNABhsU91pqzwYerVOiqQVeSNiGUMFn/azagsQ7vzyEbvKWPBBSA+MbbvtDpy34WfJTUXRIhJ7WsxmGGf4dlVs9+D21YmGgR+f/6UktOj7a4Z1UnyjiYVDO3B4vU0SQCM4y92naaj9/Aburaty+Ch0e0yoRsZh1kK7NBXB04HBnSsk09Z4WbDO71XpPNitE9h6g51jPtfv307NnWTZgtKs4zIn1dmM6eA+lpMOTtzAjMyAZO5Th9dTRbP6f8EvKP/kgEtsT090OTJsfipoxnrlKP7DvsxyhWSpqnxXL+cFOg+GzI6lwzsM7zWWK9jLln6fmvJTbdYqc1MkPdqhc9J6P1NXVu+q3AuFY+dV3OiKF4ouUG0mM4+ngurSuSt8eygtplvJWlFKZ8aj3apxHwX7kVIAatxwqaUUwQFlW0ipaQ8qFipSGbsYbXR5aKgZ2c3WyDYgT88JC5qS3IHVslmEy7+ESpMWYxG5SosjbDu6sqhehadBSuL3XPWSMA7RlUwlvjIYWBuqlGsj3XM033q+OrjMFwT3jUnFtLqSTnB7xX2Amfy2YA1CRpY/K1tYuzS/DQnQWoOiVjtX0kiKfPS6zmgUH1r2xfS9WgHQsKhcO/jJl1UVmvFDctFxoXWAMjK0kNxHoJQMCTNWtwNp/60+JJ1RVaYVWjByam3r3l0f4DvhNhBKVn5nln8W4NfzrRMxtE9ZGEU/s7XoPs6WPDj3LqlCfvDs2DNecNpz3ZRH1Tk7zRVVPavPdLF1mXyyfatyoVOTM91hnXEdAAD+CPYfc/5w6e6dtv7eb9b8NvNe5zJ+2tcTnbdptXI2E2zIwpg1eTymKK3p0zGAvcF3DH53UO7Xi3BCT480HbmImnIbmAUZjaILuy33/H4aD0IdyQ6j+aESmpfP2yaU8yC0PyyghWRtulmYeTL9jJ+tdwnTO3/M8ATowDKtN9FAGj+huHPzosWJnhn1z3uAB8+Eh1ewfB5lilVDCzyBKqP8F/7lP2klW4L/xdvK0c458Xg0DCaSYyGArUKvD7YVgl/DN/fXZ8pYfYEtP9GHGrRo94KZ3J1KiSAzl7ZTXcwL9yAlHXShfJ463sJy92tp7OgM4j6yBESkcLrVeJUkDanxL+QYLm9a+lBC0j0WRPTwFu6vPieHQNMAGtkg+y8R+dPvAjdjXiD+BxVcyN2en2vASSKjfT+Z5Io5Gl1tGQZKhskVnd3UNmoSSVEECdsPQx/8CDxjTs5aAcAcZn/uJvblUe0UkFcVl4jXKh2n4fkw7lPQi/Ti9VrouxC8nCuEfamX9XKckRViwEJYaPKwPX6xXqYQ7bcAxUjrbgdC9Hk9E/LYfLO2Y6R85XzXv7KyiyNn7lc8YYrijfPzjnL7M/9JrW8ValFF7hqGG5IWAmPPioTfRkWxihXbbwOKMxw/7sCYfrGBgB2SYWop/yvXlvipxzjk4LQTy6qZUvvNiiZo8BrFxnSK3NtHUOF752KUY6kWIBcWmagZDgSZN8Chs5VoFvD6XsFWFAr4+WbURs39klSL7bNzaw4dVfyCjonbiOIPQ18hkpXZ1++ncF0QqpeT2YrBxCHmhwIAD6Uie6DDAG/3JaNsOQOOgZQH88YQjBppLXBg+RTHiE7tS1QyeHNzJGsb3vGtkv4NtDDhRDgBRjQH3DOmJ3s3tAJEZwK8qfhNCIYuVNAyo9zDjsxwsvknhaJZaDZzXqkdSf4Ci9iaVsITYnYibLFpTjkB4+Sm9a4XjOcjn8FhLx0rrI9z1mGk/CYh32MaoiVG9G6+TylIUKHi5qcTK4LJ0ZndYXSlnbdID1VATzqemte7MAO7sm0nUb+Sx/pYuMt+d2RUOA5ynJITDl99J94eCuB1vYp8XLEqdKdzD9F28MY0K11lJXPiRurHcHXB9pKdsDM4wa3LarFCulOKTC8JTCnN1DQB2PKVOkZ+V8LN4QXtLoyf9CImyVr/HTbAN0gFPKTPViB+qIj8XpBQxdCNGBqD2xqTkyubiXvhas6+qmaKqFkkboJ46fGFaZaGiqw75VeRpqYy+MZCacyzs0Uu7VPf6rgodf2Ttv2x07T5jhsO/jTVVyblF+4hKghy3QvT+6Yq5AKzecMhkqedhnk8EoM2TMJjStIp+NHoGv75TosRqbf3NcAimb7nmc0d5lArH49rfIsjIAt28FrA/5VWoodFh235qBHrJuBCYRxmfUv+mY5cXNkaJuZZtGOH+6cJdkXD/ERmynASTSIuWOhYnTlasr33cmtT5lNoPAU4/yDHsC47B3nUybog01LAiL2GVP7WpKR0xpUAN/VQ2bTQG5t15iic77awPEa8fDzFnHcszkBWXPAfMr5iTYj0kcCwvcJiqi0TPEvvDA2SMlvL66mraET0cMDyOsx90VyuhBekK4caon67J2/cSjIEa+vWnhgfpl08oCRj+PEoKa7l6W1Mq4zfYsMPQdGIaPA393k+nv5TbyDAqqcYOcmYiinKBrj4XvmP+vRlj9ZMjvDhW9Q8y4RGx2wi1ckSmxqqX3oxAmflvXPRt4aSKN+42X/sSYkeak+c0C5NCZHNFCfP55TpNntEcifkZUZnrRtdBdXMOaRdp/BUQ8llWHR/2fHPMbWi35nagAGKCdCFH0ENdo+VazOjMcobLt+9Guedh7EhjBS1K39O7QxpgIPWAObu8XKCaL2wJle3POguL3pfQMnekKXaPaQKXMYRyab010kXfSSNklxSUL5Twss65cevsCwkCBOqr5ociiSVnBp/hLBlPs3ovc5IrfWDU19+J6HDZwDYSPAYvXetkDuaUCSbF3b1CtJqqS7aUnLPFHsOIVywkaVjHl7fLgd5t0Pm2LatIIH6uZWSbEc4QAfTITM8E13LDPTpb6Jq2tDAt1v9cRKPM0Eh3UwN299O/4LQ/rEZQYbZedjSJu4Q3WV+FtL/pFtW6iM+N+IGZ++uK9eh5byRTKhiD6i9gvcSW1nxabVW+iOZ8se2jGuQD9igQYYcLQvWfoeBUCUauGbVs7iOq1kaCxas/KdZoS7tjeyriH7UCdUmXg6vXadJOFr6YZ8p+9chaebGxob8YzIxX95WiDMVs/qB2XYXRrRgp6Yo6aoXYkxObVa3r8E2xp3R8cPj8zWJr7lnSKzRxWC79hUresoa1hJrMLQ5zclZXvoixqNi05GIAhtrf2O3cqcBhjlBNGm9gBWo//tJBS1dtUL1jM3LZ04/CnVF7iZPNuJDzKIJ+ny6Vo6oLAWPHxM+Ik+NjgqG5th+NdczSGrz7d8+XGWJ4xtYzH6GnRUGKsCU4VrTvaPnSthZfLNO2Cbyk6d1Df7L64LwRdbsLUQaNB/SYmdmklUCZmSnp8HuhJUnDoPUpKfGeK4+2TwtrJ9vtmRsT+9fPiDbIALqwDueX2vEQp90' +
  'AR/rpSovKrZs/oO7KVIUQiSb7aBJklpTPJ/V00r6JltIWsWag7i3kwbaOQJmwxmA9/u+3gt8HHZINSJrlXjYC80GyjvpANQDCpZFx+gYmLL35MGT3QOP9qcA5tdeGnAXyUQeg+symQaFnM1rKfI3fvH0CUUdLV5KGF7iFVeR1FZso63aLh4tbLH89FFPwfeVLT9CM5WBpYvMalEeAnz872fbhEHDarqm94egU6V6OPRQ7nG2yi4Enybb0w7R5I6wY5QCvc+S/JdTbBZHj9BM/iI0unztbErf4Vgm92IVxhgWJvu0eoJNulSDhpVPXYu0sRhkyKT1mH+rdFkB0wzJF7cDFMohwqmb7iDhP4gL2tKNZsh2ghuwwpBThSYoBw4EwdGYQMlFfo0SihRuNL9DMquImXvll41y1gI7sI9GxV9Zioa1VCaDWxDuLtmeo287fXCNpTC/9x1asi6vMvV1cvGt63kjsdbDxAZ3fFtFnMnzYnxS49O0sDSDrweKFPSFC3kJaQUlPXJU9CnvatxNqZKsIGX7h0kRMW5uBYb6GUWVxPzIcfi5Do+wVp4KsmVGRBB8PkaNEHViPEXYL0tA1+6Vpssg0TTGaum1lCj8l53wzZDtH3X1WTQirBRS5u85xQnEoFSsoYgHkgABSx/jNlP/8TRNupeJ6SS5HbwliIplpt/nCzuRy4UcUtCMqnPGpnH/vqpBSpnD3Nk43lcIcMKQmWATa4QDu1eeMDy6jTJ7c++BcDPhTIB/udgZvMNao9CDw9Dc84iYtx4jQz/o+pZBRPyCNytNmmz/aEyLvtdb2jg7WdLXtcwXlI45rt3QkBHAbzdibWsBcUZKlfxZDSLcJrtY2Uh5aWuLZhH4U9JPNAvUlCRyvRxXKFhR02RKJnA8MX+2DrBk4lWx7t4dUgv6DgT81rdVz4rpXtpCKqKGNwMxD9vM4CXgBID+A+9rs1N1PShkayLegQ5hQImQc6d7Cyk3ZfBfTVaEGTaw5RkmeGr8D2Xwde/xvQ85obkMuxp6RJZTmxlOjjjk6OZiuxj5oA2cOiil7Rz79e+ZLkJmiR1gTL/Veht/Dz4yvPTYgySzrEMd4z8sSSM0sSU8scfRUi3BLdR6NrbhzBn5vpRqbXhFhqMMgunWzKFcK5VYJrH7PdPyYINsf3vrfsyHtvjKovbTJINXlkwi5lPP2obLuVd6JJ9ndEHAcJgHFXL4oG2N2D+U53NtgMbZQY4zJjbShqCFWiqE5zlhjzi1c4AQsq4SoV9vPUGs81Ag/dhrvnkeNfQs4+CA9pp1Hh8k3WaB3dbkQgyXgMrUW6yEqCV4XFJExTWYOBZ4ygYQ0D2tm9fH2qKLcYn2TrzwTt2jg9GjbuB8uwJBPhXDEl82JmBQrChd/ztJpoI8xosxsvxNkA8E3kgCEr68DZ/RRBK0ADnQESjOS6RBJlgUAGn4actBZYA3SJO3xPBz4cbEdqI+BlPd3cKJzx/buJ6+KUlBhDmaKUj1Dv6R2yfX3fcC4dmD5PybGH8v7TD/4Njfm8JKabupBXYCkOjcTuLB45XLtWXnPr0npMN8PnniD6XU8CbDHQw0ywoweIcrF93kgd3wI4pKCFE8939d1u9Gq4/FvrbkYx5fJI/rhuXYqaFfyECpV92R3DRRifcmc2nQ4x6LEGJDAqlrRd9QNjeuaM8ue/ZibG0o7Y2x1nM32H8eK6sk3H6Bpi9rLSRC6APACfeLC/8gsOtthbSClFPay6hApt8Nm3k6+DEHiqkQGcvmsBxZSOCK6Kw1r3ejJyHzTXFqMHODqy0WK3wjyD5m+wjpUwpymOxP7CKkBIgJOay03OQVmvSJzYl2z8cDFEpNQt904REEwqN+0yKf12+mm5wA9lNsK6bXukNIANRaL9ivflf9+MFt9QHJfWsTdeaSkpOFTD27GqanBC0wYFCTmPte4wR34ORK+aNWQwxN5/O1HtXKfQn+s0nP1gcd1uZv8dBi5HI7asMKCg0+4bAYqYcAHnCsJFQlhY2EkwJjTDA+J92ljMU44oTjoJjGGbHu2OqFlS61CFxxK9rkrv7YjYiYNbmH9xFxIHY4qQjbrI2CKEibS6xPR7CZMiaI1g6YsASpJc7QEXLpLTH9TRsbBSuEjVKnSHzWAsMdF3iDaL+DHGNABtjHnCtFkTZ+JiO/I/A8xB+NSkEuHku4SoD+8ic3dWsjs4Ei7P76tLcBWK+7nKVckv1kGXeIXqafurFmjDfYsatOQuuCs0jdA1+53RCBs9GDvm0Q7mX8jfQaa5pubES4z87Bl1tcOa2xw4OyCb1iopzayHIyTlkAX65qTJDWT7MDYRgriBpyc4N25L/z/5a7M4+Dcbeb3KV2lX24OH6k4vyTcqM/7xhBBwOlvqt4ZpJyIulNx2o37nyDhfpi9esqRUUN6VJqj0bJcjwaxkDHLugOuHR22YoggDVLiSGipkwsPY+i+CPID+JSW9nuw87L43wCffF2D1Ja1kbmwDtUt4M66hudv/7+MhyiLCKD07W1vCZhDZwKgso1iP78yYTCUq1TgVE5waJjcvrU3jd3z2gs5egBEu1YvHWf3nX2c1cCErQtCJiNX/0grA3gxPixZ3eXFDKSzftn09bx3UKGKXvPeNbMVxZ5ve2ianZUaZ//LhlTWIANcL2TYaV5igR8CEX/R5XhMCS2K8MY7zwOiKr+VEemsu8cqLeh542/v/CeDe8TmHxPWRL01rTHZWvFx5jp2hjKsIBHfNFiXj01CJzNGshR71XeXnUi5K8RgIAwIFa1FGZkAEcRsnNet1I6py0plNlGLUTpbKWSAsesrXufH6UnxkYiIl+3NI248QCXA88bN++ANwcJeFMM9Fczek5/7a7sk4Iklfdx0OLHhaT12z63FZBcroxmdosr+2jaPwIjdyh+CXdE3nA3Tyb5RQpiTnKJEUMnUxOPthzMZ8rKQZ6cLSDXEqzvVaYlULvb0gwIfbzATR5LVDcQNO0BhxISz9FqZW0EBoaijh7Fi8Xo4q5XeiuLZm6gom8b8n9NcGP4J69cQ2eXrLiVaU9S3cRfcsbr4XHcSHSHfTvI30lO4Eu7+ErKw8ADo03rRCNljvC/H5xN7IuL6EAcmX5atcAbCRQm3aobWpG1W8A9ApGW7dRor3rgv0vR0FI6vd41tsD2qLi0eKdLygu0S9t/QEIlf33RzG+uraDYzEGFxUhHmfGvL1msRHzBvzE7WSZ/VmhPShn0T2PEpIRUCD53xATqoLM1SPw1nLPYnlr7csO9bZrNJTskaxPOGK2dZabYtGCleuxG/UNGJYlcFF/V7M6h5NmlomuqDB3c4VxDeDEKnMSjbSqUIOaGPHgsbK9GEjMlSbbzffrrEjdel90QIXCy942Nts7ERSJi6BhQlga9SNFwDGRn9NjDFRtWQHdJkTB9jRGDYk2gK1KnG0UU0Z7pJxN8GK9AfQ2VJxih9Thb2dwV0UACJKHmP9EwK6frhv5ZMpyDo9vYfgRowHXyies6wJ1gBX+fVUmO3A4cdUAcw8xzQ9cFQCja3Rtlpazc/QQRcR6Kp90Mc1DaVF9GDGdEOTxSFThrtL61GKUPeY7ZAF+Wr9tChbDqrDTvznI1uVzFHzoOd2GaWn8B+VvBwd7UBrcE0hXNMtxsYTl1Espp+HBuDQ5jZqi4fkRHkyHwY/LE/fQSEV3rzFJaCtg7rWsEvxpN5cjdY14o0MGT0D+d1oRL5wZN4XbgDIf6TGlP6b4wiWkcuYTPOD2u+pwkt9Y3BIUKx7NgsJo5Zx5yttImGQMIa8BqHTxANCiH4NOoFS7KP+qlRp44/LiJJEAFxTIG+lUngusj6ZFHyQppODIOnCFuemRC3YImHZwDxGo8eFgxJCssz57HgYJHUKhIsuEav2Ov4jy1q+MJhjIfUeuAmTAEpt7WKtWlq9ATDERq6C/plYGm+Qs18MQNXTQRtIo9Fp4on+8T1xISxXBm90bL4+eSRSdUEORYUmu4UiHHw3wGZJGJisglQPIERMZrB1X7bXX52H/f8BYL27kGT+CXTnw9lIsGwg7+xQRiotf6TLH11uJkIc9f7mC7U0vmp4A46hPTaBwglS5qNE2Zvm0Yfues76W/KdpY2f3GqOSgeRI5yoCRY7+T7s9nVtSuq38jhf8TgS22VgzTiIUvWj4zBX5RvrM/q/vPeoBxPPot6xf7qsi9OIUvTq6Sajv6PwBfXsLiqFLlPHCH70YQutOZbCeyWxGmQryc44xSnQ3Y99AobsFlH9tKjZ1Bv0oYnkLkWfy8EvAKei+p72LgFCkvwX3+1e7uQaTD1M6y9Ee6DCYP/KO+Q2EKsy6524sQxA/8fExSibw1w+5klqF2RZIfr7OsFnb/ka+RGJodBp4FJLgmImEiQjDr2KTsXjmVP4knsPtT8Pg0bMzWGLCdz7hOtlVMPcIk47BmP77v5s38vkGCT+vYwwG99MIe/w/IkFE5CBmBtxAT8tKfcP1NCHPMajAa+qRJH6lxSoGo7fWpbJGZoyVVz3XGsMTOGOfHgY6CRzrU48hHi5VFGZfUjFsUdYjPuGXKrBJhjrxBgKYMo9SKn/BxSbttKSMs688EdttQL63qQXpzh9jIcASMpKWi03dm5kmE4BmYl3ZYRO9aj4DY9N4rjtor7bPlLyw+gXxe1z6qe9g1pfp1cTBUFi3begGCOob17rU2B3iDBu3wSkJwhAA7CUacitwCZyi5aJ+RXDEh6bUCdFVIOT4hHYnwAa35uoWOCO/ISimU1sANQdsLmiuux3DG0VyIfdnrTlUQZMMHFwTTKUBifIrVDd4ZSN/minbkKWdsRwqFyrvxbtvr8tfSsXhanTmPYx4hq9Ks/1Zu3L1pAeTii1C41lYHTdieN9MAJpbV4SAIHhLZAQuIUV3wDQoa1pIX5F4qRdjiWlRSx8744KKwyUzbZ5mvW/8etfBToNrkp72HimSA6kSyfbejnc5LfPnpuOuB56Gd9PzVVFSf3y2Uq7gRQu40g3Ny' +
  'z2CZ3UQaSpv/hOM6uKlTgZBddAvB6M9t66fKg2G+KT4OdmNPLiB/eZeFt8coZ1YS8Q9i2CSq3VBOS6BBhJN+dM/ZBN1/4K5qEx0YolVFlgpE/Bk78v37+7YLCkE+HGpPXxZNnGjew9zIzdh+OVwPc6JMnMITKp6UaUczBNqwok1C/ZOOhpXdahuyjpTo4YlJDZqeK2R3XvxnBDbDWIQTUsGfXlUcrak98kVRWgo1A3lerpCh5sGr5OCiypNwhBmkPD8bWQJ8S56MapsHC11vlmpJ9GKDHQpnsD/sAJzMGiXH6aJ7EnLyugetNPHsjxkR1gRbdL+QXCuK+Ol6fVtW2YD3KbhS4VVadcMkhsiIzw2tShZZunRhdVO5s0RbDOFy8qWTpaydiguILWP/UScXcbVJxPb6+kAN05Og/TEk/KIdbGWhP/ZHod5bDXMMpC751oDLU5zqLnFNZ/eO9rvbs2rOD/vxNwQ4zFi1uGMBwsXZsJehSaeNoinxYwRh1oD5hxVCTnDKaod1FDJjzVnjM3KLOF4h8/j+4k7275+nyu1uurbAO3tlLKltl7Q3k1gWo20CNvvwnvCXWOQ7ho/9v0dUVJ9rfA+Or3y2d1OGbWSTR3mKIDNfS/Ew1KGQ02oe0468vNQzns69saZ676PNBtHVc2C5exOilBLMop/uM+0TWTDgZlBrH6OUdUbMgRu/ymKgwoZ+gOEByl/BJXi3UfG3l1fzQJE7SCa3/g6nbKstdO8uNS3r4dzGqqGo/+R5C7dro2zIfCvA5C+VDFgBnrdrHsgGOyDXsHBqexceVi/4I/Pty/MH3KduvTGWXjw0Le9RSyBTua2djnplbZrgHQxaotmLmVz4IIt/KcHxe7hSTeyQC03rWamp7h/j/oi8cJcR0pKAdiYh8OPUiyjWxH8V6r96AXm+q7r7AaG0T490ArN/obV1u+Q9bSNAYT54mfT9UDTTs+Ful5RNWLx/jMQrFNldxvSv8LY6OZBwJTP40lZ0Hg4jb+3R2VWmMrO1mPEoo3mYps8Acgg7rkbNL2Bg1D3V0gt5QG4vVZPpPyLk44W+z3N4nYU05HNSZ9aX5EE2K52Hhe/e5wDMnouB1we239iLm0cEygfSUyIPAVLM1OayNbhNSnvogV6VKniDbU2kWeW4I7CUcn3lmCHXtBseXOis6s2OtguZBpIbURtJz1P8PACV3o6CCAxpKr/qHTBID+uceM0njWJ15mvwf3j/XAitxmluyRrOGsVcsux8GkVlBmnfN1bfMUWnGzCrt+KWJSnxGjajdayKL3qqhlWI1O1WT2YeECbLHuR0yDU+NGaryS27JOGkryC4bC9W4yRh9DLlYvlqz+EXTyWy7TiKWhx0r9C8P6sqqzZTDQEveLqRZQCd0A6J2TPJ2tkk1u4tTYDHqyXeIWMl+owxk2yHhM9zaeFxppl58CqZAp82uw9NKyCxXVc03JPnTzCymvqPuPoiugIKx6bXK9fltWeO+wO7V1qpdKbnDfcIvVNtWGTM233pYE9vqqhG4HtUNApNeXy1mzkbXN139Tw+QCCdmEhaPVQr/Nh+oYsKw1NJZZHLQ6/A0srNG8zUn7/uy3Pq4NdC4hOHobiB/JnfeEb7rrxizQ9MtJimEkma6Oe0YYHJOiMtaDw9y6iwmjVelZKblW4x8Ee3gP6ejD6og2IxyFrnQxH5w7sqqQ41+nPO3FVt6alR6CqrldIRCQaeT7CjadgOnyNdAW4AOoRiV0A9PgnY69foxrwAVTdKjAqUZpSGQm8hlyUw7DdqqVX4DMW4al9NcwzUmMm+BEeuWxJZa5CGNa+iw4HrclBSnNGmc6reexp+AUvEVChBpdmu4Y9aUG3wLEIP8rACwJg1uGKyhkzi2PXTyHnGv6qP6/QYZRR6g4L7BiiiFHbHPOw3iSzEudAhWbJsDLVvJcTBlNvh1eAXphwu+qJQ1uXDGHlcREV0eqeW8x++UU28q22tCL7BHrQ9op7AlD7cIUCUx8bajiZEnaFnrO6zyK8Qe2u+Fv098i9ouEOtBrjuIyKLJLYX9h0B0eikgqDwxXTspsj5OOP7XsRPQOevr2tm9g56+tTr+z8KrXGl461janlBL/O0LD9Sz86gtey3TZvf9kswZxUO2uGzI0xvwLjn6VQ4sKRRMK+yqERjYwViNR3D70mLT3QA3Ng0PEd9htCj9KBkDcjNbmQaLoKrAX2HnwjhJlXONc6xU+N7zP34ScLVxALhgyBF5qirZLzhOaZpfNKkcaox/7qT7Jr47vhNmBnUC0Muqmqris5+HlhkBC7udhwsx5N/svKLzGUq2fiOLIy3Q/OE4dL488vKOeib0mmJGAR1S/qNKSPL88fh1shgx7IZT0usHSm6kr3gJwYs2IpjB/hknCW4iEdepyyWJTcycC89SQdD+niACi3y56SZvbPJlfqOKEBVCM6AEFv3E8z0IAWDDTyW3SFzVlw4ku5FWETjpmpR0w/BQg+IORSkb5eW+9p/REnoEUAs0jdCwxTHxLkpr3lfdWOr8/ANncX9NsRs8XJT2l3hIF7dAHHxCIbAXVE86DaPVd8E3FQhP0p38uE9Gq21Mk3QWJvl9YYZqxGd+yE/MBI/3ZfC41/CTl9yXTcagxa88hk3sLDps52S93CzSeB/5KPt1A+AGMRZdCsGKF20aOXmYG34+j5CbKAfxD0y06YHqzg+2zG7ESNi7xAy/wEm5soJw+u3MeUXrBXNczSRLlb8ibnlvE88cDHI11VRia0v17TASqAEz2oDws2U7xE/p3w5p72dH474oXlqYpkUASNdiBmGnL3kUAwOygI/uAoxA/So2R31qa4dTT9RN5P5odtXDbjUOHN2bxWDzcFNRwotwHXubV6xPT0yI/hTtA73DJ5VOnYbcuP9yxwQEJZw55W3qXpqIs5gbNtA+3XC46P9FDrNQhwZ5AE0/DQ5bOUDFhOU1r+PmibAqVkAdQlQcxP1DQ4thjRJhu7OvPLWgglwf95AE2B5un8mIAAA';

const highlights = [
  { icon: Clock3, label: 'Mais de 10 anos de experiência' },
  { icon: Scissors, label: 'Peças feitas à mão' },
  { icon: BookOpen, label: 'Cursos passo a passo' },
  { icon: Heart, label: 'Encomendas personalizadas' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container about-grid">
        <div className="about-photo-wrap">
          <div className="about-photo-card">
            <img
              src={gisaPhoto}
              alt="Giselle, artesã e professora do Ateliê Gisa Crochê"
            />
          </div>

          <div className="about-quote">
            <p>“Amo o que faço e quero ensinar cada detalhe que aprendi ao longo desses anos.”</p>
            <span>— Giselle, Gisa Crochê</span>
          </div>
        </div>

        <div className="about-content">
          <span className="badge badge-terracota">Nossa História &amp; Essência</span>
          <h2 className="heading-serif">Sobre a Gisa Crochê</h2>

          <p>
            Meu nome é <strong>Giselle</strong> e sou a artesã e professora por trás do Ateliê Gisa Crochê.
            Faço crochê há mais de 10 anos e amo transformar fios em peças únicas, produzidas à mão com
            cuidado, criatividade e personalidade.
          </p>

          <p>
            Depois de anos aperfeiçoando técnicas, criando encomendas e compartilhando conteúdos,
            decidi transformar esse conhecimento em aulas completas. Ensino cada etapa com calma e
            detalhes para que outras pessoas também possam criar suas próprias peças.
          </p>

          <div className="about-highlights">
            {highlights.map(({ icon: Icon, label }) => (
              <div className="about-highlight" key={label}>
                <Icon size={19} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a href="#cursos" className="about-button">
            <BookOpen size={18} />
            Conhecer os cursos
          </a>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 5.25rem 0 5.75rem;
          background: var(--color-bg);
          overflow: hidden;
        }

        .about-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.85fr) minmax(360px, 1.15fr);
          gap: clamp(3rem, 6vw, 5.25rem);
          align-items: center;
        }

        .about-photo-wrap {
          position: relative;
          width: min(100%, 450px);
          margin: 0 auto;
        }

        .about-photo-card {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: calc(var(--radius-lg) + 4px);
          border: 6px solid var(--color-surface);
          box-shadow: var(--shadow-lg);
          background: var(--color-pink-light);
        }

        .about-photo-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 24%;
        }

        .about-quote {
          position: absolute;
          right: -1.25rem;
          bottom: -1.65rem;
          max-width: 270px;
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background: rgba(255, 255, 255, 0.96);
          box-shadow: var(--shadow-lg);
        }

        .about-quote p {
          margin: 0 0 0.45rem;
          font-family: var(--font-serif);
          font-size: 0.98rem;
          font-style: italic;
          line-height: 1.42;
          color: var(--color-deep);
        }

        .about-quote span {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-primary);
        }

        .about-content h2 {
          margin: 1rem 0 1.35rem;
          font-size: clamp(2.2rem, 4.2vw, 3.2rem);
          line-height: 1.1;
          color: var(--color-text);
        }

        .about-content > p {
          margin: 0 0 1.15rem;
          color: var(--color-text-muted);
          font-size: 1rem;
          line-height: 1.72;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem 1.2rem;
          margin: 1.8rem 0 2.1rem;
        }

        .about-highlight {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .about-highlight :global(svg) {
          flex: 0 0 auto;
          color: var(--color-primary);
        }

        .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.88rem 1.6rem;
          border-radius: var(--radius-full);
          background: var(--color-primary);
          color: #fff;
          font-size: 0.92rem;
          font-weight: 700;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .about-button:hover {
          background: var(--color-primary-hover);
          transform: translateY(-2px);
        }

        @media (max-width: 860px) {
          .about-section {
            padding: 4.25rem 0 4.75rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 3.75rem;
          }

          .about-photo-wrap {
            width: min(100%, 420px);
          }
        }

        @media (max-width: 520px) {
          .about-section {
            padding: 3.5rem 0 3.9rem;
          }

          .about-grid {
            gap: 2.6rem;
          }

          .about-photo-card {
            aspect-ratio: 4 / 5;
            border-width: 4px;
          }

          .about-quote {
            position: relative;
            right: auto;
            bottom: auto;
            width: calc(100% - 1.2rem);
            max-width: none;
            margin: -1.3rem auto 0;
            padding: 1rem 1.1rem;
          }

          .about-content h2 {
            margin-top: 0.8rem;
            font-size: 2.1rem;
          }

          .about-content > p {
            font-size: 0.94rem;
          }

          .about-highlights {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            margin: 1.5rem 0 1.75rem;
          }

          .about-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
