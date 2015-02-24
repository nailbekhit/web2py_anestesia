# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is a sample controller
## - index is the default action of any application
## - user is required for authentication and authorization
## - download is for downloading files uploaded in the db (does streaming)
## - api is an example of Hypermedia API support and access control
#########################################################################

def gerar_botoes():
    botoes = (FORM(
        BUTTON('TELA DE INCLUSÂO',
               _id='btn_interface_incluir',
               _name='btn_inicial',
               _value='1',
               _onclick='prepara_formulario()'),
        BUTTON('TELA DE BUSCA',
               _id='btn_interface_busca',
               _name='btn_inicial',
               _value='2'),
        BUTTON('TELA DE ALTERAÇÃO',
               _id='btn_interface_alteracao',
               _name='btn_inicial',
               _value='3')
    ))
    return botoes

def index():
    """
    example action using the internationalization operator T and flash
    rendered by views/default/index.html or views/generic.html

    if you need a simple wiki simply replace the two lines below with:
    return auth.wiki()
    """
    valor_botao = request.vars.btn_inicial
    botoes_nav = gerar_botoes()
    teste = ''

    if valor_botao == '1':
        redirect(URL('pagina_incluir', 'index'))
    elif valor_botao == '2':
        redirect(URL('pagina_buscar', 'index'))
    elif valor_botao == '3':
        redirect(URL('pagina_alterar', 'index'))

    #response.flash = T("Welcome to web2py!")
    return dict(botoes=botoes_nav)


def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/manage_users (requires membership in
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    """
    return dict(form=auth())


@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)


def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    return service()


@auth.requires_login() 
def api():
    """
    this is example of API with access control
    WEB2PY provides Hypermedia API (Collection+JSON) Experimental
    """
    from gluon.contrib.hypermedia import Collection
    rules = {
        '<tablename>': {'GET':{},'POST':{},'PUT':{},'DELETE':{}},
        }
    return Collection(db).process(request,response,rules)
