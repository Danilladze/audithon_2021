import requests
import datetime
import re
import os
import plotly.express as px
import pandas as pd
from django.shortcuts import render
from plotly.offline import plot
from plotly.graph_objs import Scatter


#magic for date




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

        date = request.POST['day']

        # magic for date
        now = datetime.datetime.now()
        date_first = date[5:7] + '.' + date[8:] + '.' + date[:4]
        date_second = now.strftime("%d.%m.%Y")
        date_for_url = date_first + '-' + date_second
        print(date_for_url)

        print(date)
        tax = int(salary) // 13



        # converting a region to a code
        region_base = pd.read_csv(os.getcwd()+'/audithon/static/assets/csv/codes.csv', index_col='region')
        # print(region_base)
        kod_for_url = str(region_base.loc[region, 'kod'])
        if len(kod_for_url) == 1:
            kod_for_url = '0' + kod_for_url

        # creating url_api by region and price
        url_contracts = 'https://api.spending.gov.ru/v1/contracts/search/?customerregion='
        url_nprojects = 'https://api.spending.gov.ru/v1/natprojects/nprojects/'
        url_private = 'https://lk.zakupki.gov.ru/223/contract/private/download/download.html?id=75825934'
        reg_for_url = kod_for_url
        price_url = '&pricerange=1000-'
        date_url = '&daterange='
        api = url_contracts + str(reg_for_url) + price_url + str(tax) + date_url + date_for_url

        # text from api
        contracts_get_api = requests.get(api)
        contracts_text = contracts_get_api.json()
        test = contracts_text['contracts']['data']
        df = pd.DataFrame(test)
        #print(contracts_text)


        contract_info = pd.DataFrame()

        name = []
        for i in range(len(df)):
            name.append(df.loc[i, 'products'][0]['name'])

        if 'contractUrl' in df.columns:
            #products =
            contract_info = df[['contractUrl', 'price']]
        else:
            contract_info = df[['price']]

        contract_info['name_of_products'] = name


        user_info = {'region': region, 'tax': tax}
        print(user_info)


    return render(request, 'index.html', {'table': contract_info.to_html()})




