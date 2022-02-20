# -*- coding: utf-8 -*-
import pyupbit


access = "QUdwbNBObPKo9UHAiJnxUsGOxSEQ7Fxa4DRlmFCj"          # 본인 값으로 변경
secret = "Y4ajtQjpWpVyUJCoxTL2zi5VAGxarEJBF3Un3a7P"          # 본인 값으로 변경
upbit = pyupbit.Upbit(access, secret)


print(upbit.get_balance("KRW-BTC"))     # KRW-XRP 조회
print(upbit.get_balance("KRW"))         # 보유 현금 조회