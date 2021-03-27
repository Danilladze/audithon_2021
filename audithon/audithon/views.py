from django.shortcuts import render
from django.http import HttpResponse
import os
import requests
import datetime
import pandas as pd
import re
import plotly.express as px
import pandas as pd
from django.shortcuts import render
from plotly.offline import plot
from plotly.graph_objs import Scatter


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
region = 'Республика Башкортостан'
salary = 100000

def region_page(request):
    #converting a region to a code
    region_base = pd.read_csv('./kod.csv', index_col='region')

    #print(region_base)
    kod_for_url = str(region_base.loc[region, 'kod'])
    if len(kod_for_url) == 1:
        kod_for_url = '0' + kod_for_url

def create_api(request):
    #creating url_api by region and price
    url = 'https://api.spending.gov.ru/v1/contracts/search/?customerregion='
    reg_for_url = kod_for_url
    price_url = '&pricerange=1000-'
    date_url = '&daterange='
    api = url + str(reg_for_url) + price_url + str(salary) + date_url + date_for_url
    print(api)

def text_from_api(request):
    #text from api
    contracts_get_api = requests.get(api)
    contracts_text = contracts_get_api.text
    print(contracts_text)




def graph(request):
    x_data = [0,1,2,3]
    y_data = [x**2 for x in x_data]
    plot_div = plot([Scatter(x=x_data, y=y_data,
                        mode='lines', name='test',
                        opacity=0.8, marker_color='green')],
               output_type='div')
    return render(request, "index.html", context={'plot_div': plot_div})



"""def graph(request):

    vendors = ["Цифровая экономика", "Малое и среднее предпринимательство", "Производительность труда",
               "Международная кооперация и экспорт", "Экология", "Образование", "Наука", "Культура", "Здравоохранение",
               "Жилье и городская среда", "Демография", "Безопасные и качественные автомобильные дороги",
               "Транспортная инфраструктура"]
    sectors = ["Национальная экономика", "Национальная экономика", "Национальная экономика", "Национальная экономика",
               "Охрана окружающей среды", "Образование", "Образование", "Культура, кинематография", "Здравоохранение",
               "Социальная политика", "Социальная политика", "Социальная политика", "Социальная политика"]
    regions = ["Национальные проекты", "Национальные проекты", "Национальные проекты", "Национальные проекты",
               "Национальные проекты", "Национальные проекты", "Национальные проекты", "Национальные проекты",
               "Национальные проекты", "Национальные проекты", "Национальные проекты", "Национальные проекты",
               "Национальные проекты"]
    df = pd.DataFrame(
        dict(vendors=vendors, sectors=sectors, regions=regions)
    )
    print(df)
    fig = px.sunburst(df, path=['regions', 'sectors', 'vendors'])
    context['graph'] = div

    return context"""

def get_Info(request):
    if request.method == 'POST':
        region = request.POST['region']
        salary = request.POST['salary']
        tax = int(salary) // 13
        user_info = {'region': region, 'tax': tax}
        vendors = ["Цифровая экономика", "Малое и среднее предпринимательство", "Производительность труда",
                   "Международная кооперация и экспорт", "Экология", "Образование", "Наука", "Культура",
                   "Здравоохранение",
                   "Жилье и городская среда", "Демография", "Безопасные и качественные автомобильные дороги",
                   "Транспортная инфраструктура"]
        sectors = ["Национальная экономика", "Национальная экономика", "Национальная экономика",
                   "Национальная экономика",
                   "Охрана окружающей среды", "Образование", "Образование", "Культура, кинематография",
                   "Здравоохранение",
                   "Социальная политика", "Социальная политика", "Социальная политика", "Социальная политика"]
        regions = ["Национальные проекты", "Национальные проекты", "Национальные проекты", "Национальные проекты",
                   "Национальные проекты", "Национальные проекты", "Национальные проекты", "Национальные проекты",
                   "Национальные проекты", "Национальные проекты", "Национальные проекты", "Национальные проекты",
                   "Национальные проекты"]
        df = pd.DataFrame(
            dict(vendors=vendors, sectors=sectors, regions=regions)
        )

        plot_div = px.sunburst(df, path=['regions', 'sectors', 'vendors'])



        print(user_info)


    return render(request, 'index.html', context={'plot_div': plot_div})




