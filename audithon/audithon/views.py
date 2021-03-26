from django.shortcuts import render
from django.http import HttpResponse
import os
import requests
import datetime
import pandas as pd
import re

#функции еще не привязаны к функционалу веб-приложения :))

def time_url(request):
    #magic for date
    now = datetime.datetime.now()
    d_year = str(now.year)
    d_month = str(now.month-1)
    if len(d_month) == 1:
        d_month = '0' + d_month
    d_day = str(now.day)
    date_first = d_day + '.' + d_month + '.' + d_year
    date_second = now.strftime("%d.%m.%Y")
    date_for_url = date_first + '-' + date_second


#data from site
name_reg = 'Республика Башкортостан'
price = 100000

def region_page(request):
    #converting a region to a code
    region_base = pd.read_csv('./kod.csv', index_col='region')

    #print(region_base)
    kod_for_url = str(region_base.loc[name_reg, 'kod'])
    if len(kod_for_url) == 1:
        kod_for_url = '0' + kod_for_url

def create_api(request):
    #creating url_api by region and price
    url = 'https://api.spending.gov.ru/v1/contracts/search/?customerregion='
    reg_for_url = kod_for_url
    price_url = '&pricerange=1000-'
    date_url = '&daterange='
    api = url+str(reg_for_url)+price_url+str(price)+date_url+date_for_url
    print(api)

def text_from_api(request):
    #text from api
    contracts_get_api = requests.get(api)
    contracts_text = contracts_get_api.text
    print(contracts_text)


