<!DOCTYPE html>
<html lang="es">
  <head>
    <meta name="description" content="Web Siscos Manual.">
    <title>SISCOS</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!--w3 school css-->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <!--imagen ico de pestaña-->
    <link rel="icon" href="imagenes/siscos.png">
    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style type="text/css">body { cursor: crosshair}</style>

  </head>
  <body class="app sidebar-mini rtl" data-spy="scroll" data-offset="50">
    <!-- Navbar-->
    <header class="app-header"><a class="app-header__logo" href="index.html">SISCOS</a>
      <!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
    </header>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="imagenes/logosiscos3.png" alt="User Image">
        <div>
          <p class="app-sidebar__user-name">Siscos</p>
          <p class="app-sidebar__user-designation">Manual Web</p>
        </div>
      </div>
      <ul class="app-menu">
          <li><a class="app-menu__item" href="glosario.html"><i class="app-menu__icon fa fa-file-text"></i><span class="app-menu__label">Glosario</span></a></li>

          <li><a class="app-menu__item" href="registrarse.html"><i class="app-menu__icon fa fa-user"></i><span class="app-menu__label">Registrarse</span></a></li>

          <li class="treeview"><a class="app-menu__item active" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-filter"></i><span class="app-menu__label">Opciones</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
            <ul class="treeview-menu">
              <li><a class="treeview-item" href="cerrar_sesion_actual.html"><i class="icon fa fa-chevron-circle-right"></i> Cerrar Sesión Actual</a></li>
              <li><a class="treeview-item" href="cambio_contrasena.html"><i class="icon fa fa-chevron-circle-right"></i> Cambio Contraseña</a></li>
              <li><a class="treeview-item" href="salir.html"><i class="icon fa fa-chevron-circle-right"></i> Salir</a></li>
            </ul>
          </li>
          <!--menu de configuracion-->
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-cogs"></i><span class="app-menu__label">Configuración</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
            <ul class="treeview-menu">
              <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> General</h6></a></li>
                  <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="confi_gene_departamento.html"><i class="icon fa fa-chevron-circle-right"></i> Departamentos</a></li>
                  <li><a class="treeview-item" href="confi_gene_localidades.html"><i class="icon fa fa-chevron-circle-right"></i> Localidades</a></li>
              <div class="dropdown-divider"></div>
              <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Gestión Ordenes</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="confi_tipo_reparacion.html"><i class="icon fa fa-chevron-circle-right"></i> Tipo Reparación</a></li>
                  <li><a class="treeview-item" href="confi_tipo_peticion.html"><i class="icon fa fa-chevron-circle-right"></i> Tipo Petición</a></li>
                  <li><a class="treeview-item" href="confi_tipo_de_orden_ot.html"><i class="icon fa fa-chevron-circle-right"></i> Tipo De Orden OT</a></li>
                  <li><a class="treeview-item" href="confi_causales_devolucion.html"><i class="icon fa fa-chevron-circle-right"></i> Causales Devolución</a></li>
                  <li><a class="treeview-item" href="confi_operacion_comercial.html"><i class="icon fa fa-chevron-circle-right"></i> Operación Comercial</a></li>
                  <li><a class="treeview-item" href="confi_clases_mano_obra.html"><i class="icon fa fa-chevron-circle-right"></i> Clases Mano Obra</a></li>
                  <li><a class="treeview-item" href="confi_registro_actividades.html"><i class="icon fa fa-chevron-circle-right"></i> Registro Actividades</a></li>
                  <li><a class="treeview-item" href="confi_registro_produccion.html"><i class="icon fa fa-chevron-circle-right"></i> Registro Producción</a></li>
                  <li><a class="treeview-item" href="confi_plantillas_materiales.html"><i class="icon fa fa-chevron-circle-right"></i> Plantilla Materiales</a></li>
                  <li><a class="treeview-item" href="confi_plantillas_actividades.html"><i class="icon fa fa-chevron-circle-right"></i> Plantilla Actividades</a></li>
                  <li><a class="treeview-item" href="confi_bandejas_de_legalizacion.html"><i class="icon fa fa-chevron-circle-right"></i> Bandejas De Legalización</a></li>
                  <li><a class="treeview-item" href="confi_areas_de_transferencias.html"><i class="icon fa fa-chevron-circle-right"></i> Areas De Transferencia</a></li>
                  <li><a class="treeview-item" href="confi_causales_reagendamiento.html"><i class="icon fa fa-chevron-circle-right"></i> Causales Reagendamiento</a></li>
              <div class="dropdown-divider"></div>
              <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Inventario</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="confi_estado_material.html"><i class="icon fa fa-chevron-circle-right"></i> Estado Material</a></li>
                  <li><a class="treeview-item" href="confi_tipo_material.html"><i class="icon fa fa-chevron-circle-right"></i> Tipo Material</a></li>
                  <li><a class="treeview-item" href="confi_configuracion_stock_pedidos.html"><i class="icon fa fa-chevron-circle-right"></i> Configuración Stock Pedidos</a></li>
                  <li><a class="treeview-item" href="confi_stock_personal.html"><i class="icon fa fa-chevron-circle-right"></i> Stock Personal</a></li>
                  <li><a class="treeview-item" href="confi_alerta_stock.html"><i class="icon fa fa-chevron-circle-right"></i> Alerta Stock</a></li>
                  <li><a class="treeview-item" href="confi_configuracion_bodegas.html"><i class="icon fa fa-chevron-circle-right"></i> Configuración Bodegas</a></li>
                  <li><a class="treeview-item" href="confi_configuracion_departamentos.html"><i class="icon fa fa-chevron-circle-right"></i> Configuración Departamentos</a></li>
                  <li><a class="treeview-item" href="confi_periodos.html"><i class="icon fa fa-chevron-circle-right"></i> Periodos</a></li>
                  <li><a class="treeview-item" href="confi_pep.html"><i class="icon fa fa-chevron-circle-right"></i> PEP</a></li>
            </ul>
          </li><!--fin menu de configuracion-->
          <!--menu de inventario-->
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-cubes"></i><span class="app-menu__label">Inventario</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
            <ul class="treeview-menu">
              <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Utilidades</h6></a></li>
                  <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_carga_masiva_material.html"><i class="icon fa fa-chevron-circle-right"></i> Carga Masiva Material</a></li>
              <div class="dropdown-divider"></div>
              <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Registro</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_bodegas.html"><i class="icon fa fa-chevron-circle-right"></i> Bodegas</a></li>
                  <li><a class="treeview-item" href="inv_centros.html"><i class="icon fa fa-chevron-circle-right"></i> Centros</a></li>
                  <li><a class="treeview-item" href="inv_unidades_medida.html"><i class="icon fa fa-chevron-circle-right"></i> Unidades Medida</a></li>
                  <li><a class="treeview-item" href="inv_marcas.html"><i class="icon fa fa-chevron-circle-right"></i> Marcas</a></li>
                  <li><a class="treeview-item" href="inv_modelos.html"><i class="icon fa fa-chevron-circle-right"></i> Modelos</a></li>
                  <li><a class="treeview-item" href="inv_mercancia.html"><i class="icon fa fa-chevron-circle-right"></i> Mercancia</a></li>
                  <li><a class="treeview-item" href="inv_proveedores.html"><i class="icon fa fa-chevron-circle-right"></i> Proveedores</a></li>
              <div class="dropdown-divider"></div>
              <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Entradas Almacen</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_entrada_ct.html"><i class="icon fa fa-chevron-circle-right"></i> Entrada CT</a></li>
                  <li><a class="treeview-item" href="inv_entrada_eecc.html"><i class="icon fa fa-chevron-circle-right"></i> Entrada EECC</a></li>
                  <li><a class="treeview-item" href="inv_control_material_entrada.html"><i class="icon fa fa-chevron-circle-right"></i> Control Material Entrada</a></li>
                  <li><a class="treeview-item" href="inv_consulta_entrada.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Entrada</a></li>
                  <li><a class="treeview-item" href="inv_anular_entrada.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Entrada</a></li>
                  <li><a class="treeview-item" href="inv_actualizar_entrada.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar Entrada</a></li>
                  <li><a class="treeview-item" href="inv_devolucion.html"><i class="icon fa fa-chevron-circle-right"></i> Devolución</a></li>
                  <li><a class="treeview-item" href="inv_consulta_devolucion.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Devolución</a></li>
                  <li><a class="treeview-item" href="inv_anular_devolucion.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Devolución</a></li>
                  <li><a class="treeview-item" href="inv_reintegros_ct.html"><i class="icon fa fa-chevron-circle-right"></i> Reintegros CT</a></li>
                  <li><a class="treeview-item" href="inv_consultar_reintegro.html"><i class="icon fa fa-chevron-circle-right"></i> Consultar Reintegro</a></li>
                  <li><a class="treeview-item" href="inv_anular_reintegro.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Reintegro</a></li>
                  <li><a class="treeview-item" href="inv_actualizar_peticion_serial.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar Petición Serial</a></li>
                  <li><a class="treeview-item" href="inv_habilitar_inhabilitar_reserva.html"><i class="icon fa fa-chevron-circle-right"></i> Habilitar/Inhabilitar Reserva</a></li>
                  <li><a class="treeview-item" href="inv_cambio_ubicacion_serial.html"><i class="icon fa fa-chevron-circle-right"></i> Cambio Ubicación Serial</a></li>
                  <li><a class="treeview-item" href="inv_actualizar_serial.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar Serial</a></li>
              <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Pedidos Material</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_pedidos.html"><i class="icon fa fa-chevron-circle-right"></i> Pedidos</a></li>
                  <li><a class="treeview-item" href="inv_consulta_pedido.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Pedido</a></li>
                  <li><a class="treeview-item" href="inv_consulta_pedidos_por_fecha.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Pedido Por Fecha</a></li>
                  <li><a class="treeview-item" href="inv_anular_pedido.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Pedido</a></li>
                  <li><a class="treeview-item" href="inv_pedidos_pend_entregar.html"><i class="icon fa fa-chevron-circle-right"></i> Pedido Pend. Entregar</a></li>
                  <li><a class="treeview-item" href="inv_listado_pedidos_pendiente.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Pedidos Pendientes</a></li>
                  <li><a class="treeview-item" href="inv_generar_pedidos.html"><i class="icon fa fa-chevron-circle-right"></i> Generar Pedido</a></li>
                  <li><a class="treeview-item" href="inv_listado_abastecimiento.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Abastecimiento</a></li>
              <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Salidas Almacen</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_entregas.html"><i class="icon fa fa-chevron-circle-right"></i> Entregas</a></li>
                  <li><a class="treeview-item" href="inv_entregas_pedidos_autom.html"><i class="icon fa fa-chevron-circle-right"></i> Entregas Pedidos Autom.</a></li>
                  <li><a class="treeview-item" href="inv_entregas_con_ticket.html"><i class="icon fa fa-chevron-circle-right"></i> Entregas Con Ticket</a></li>
                  <li><a class="treeview-item" href="inv_entregas_con_solicitud.html"><i class="icon fa fa-chevron-circle-right"></i> Entregas Con Solicitud</a></li>
                  <li><a class="treeview-item" href="inv_consulta_entregas.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Entrega</a></li>
                  <li><a class="treeview-item" href="inv_anular_entrega.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Entrega</a></li>
                  <li><a class="treeview-item" href="inv_salidas_ct.html"><i class="icon fa fa-chevron-circle-right"></i> Salidas CT</a></li>
                  <li><a class="treeview-item" href="inv_salidas_eecc.html"><i class="icon fa fa-chevron-circle-right"></i> Salidas EECC</a></li>
                  <li><a class="treeview-item" href="inv_consulta_salidas.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Salidas</a></li>
                  <li><a class="treeview-item" href="inv_anular_salidas.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Salidas</a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Traslados</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_traslado_entre_personal.html"><i class="icon fa fa-chevron-circle-right"></i> Traslado Entre Personal</a></li>
                  <li><a class="treeview-item" href="inv_traslado_bodega_ct.html"><i class="icon fa fa-chevron-circle-right"></i> Traslado Bodega CT</a></li>
                  <li><a class="treeview-item" href="inv_traslado_bodega_eecc.html"><i class="icon fa fa-chevron-circle-right"></i> Traslado Bodega EECC</a></li>
                  <li><a class="treeview-item" href="inv_ingreso_traslado_ct.html"><i class="icon fa fa-chevron-circle-right"></i> Ingreso Traslado CT</a></li>
                  <li><a class="treeview-item" href="inv_ingreso_traslado_eecc.html"><i class="icon fa fa-chevron-circle-right"></i> Ingreso Traslado EECC</a></li>
                  <li><a class="treeview-item" href="inv_anular_traslado.html"><i class="icon fa fa-chevron-circle-right"></i> Anular Traslado</a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Consultas</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_estado_serial.html"><i class="icon fa fa-chevron-circle-right"></i> Estado Serial</a></li>
                  <li><a class="treeview-item" href="inv_estado_entregas_seriales.html"><i class="icon fa fa-chevron-circle-right"></i> Estado Entrega Seriales</a></li>
                  <li><a class="treeview-item" href="inv_kardex_material.html.html"><i class="icon fa fa-chevron-circle-right"></i> Kardex Material</a></li>
                  <li><a class="treeview-item" href="inv_kardex_personal.html"><i class="icon fa fa-chevron-circle-right"></i> Kardex Personal</a></li>
                  <li><a class="treeview-item" href="inv_stock_material.html"><i class="icon fa fa-chevron-circle-right"></i> Stock Material</a></li>
                  <li><a class="treeview-item" href="inv_stock_personal.html"><i class="icon fa fa-chevron-circle-right"></i> Stock Personal</a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Reportes</h6></a></li>
              <div class="dropdown-divider"></div>
                  <li><a class="treeview-item" href="inv_existencia_almacen.html"><i class="icon fa fa-chevron-circle-right"></i> Existencia Almacen</a></li>
                  <li><a class="treeview-item" href="inv_existencia_reintegros.html"><i class="icon fa fa-chevron-circle-right"></i> Existencia Reintegros</a></li>
                  <li><a class="treeview-item" href="inv_existencia_por_remision.html"><i class="icon fa fa-chevron-circle-right"></i> Existencia Por Remision</a></li>
                  <li><a class="treeview-item" href="inv_existencia_por_periodo.html"><i class="icon fa fa-chevron-circle-right"></i> Existencia Por Periodo</a></li>
                  <li><a class="treeview-item" href="inv_costo_inventario.html"><i class="icon fa fa-chevron-circle-right"></i> Costo Inventario</a></li>
                  <li><a class="treeview-item" href="inv_costo_entradas.html"><i class="icon fa fa-chevron-circle-right"></i> Costo Entrada</a></li>
                  <li><a class="treeview-item" href="inv_entradas_almacen.html"><i class="icon fa fa-chevron-circle-right"></i> Entrada Almacen</a></li>
                  <li><a class="treeview-item" href="inv_entregas_almacen.html"><i class="icon fa fa-chevron-circle-right"></i> Entrega Almacen</a></li>
                  <li><a class="treeview-item" href="inv_devoluciones_almacen.html"><i class="icon fa fa-chevron-circle-right"></i> Devoluciones Almacen</a></li>
                  <li><a class="treeview-item" href="inv_reintegros_almacen.html"><i class="icon fa fa-chevron-circle-right"></i> Reintegros Almacen</a></li>
                  <li><a class="treeview-item" href="inv_salidas_almacen.html"><i class="icon fa fa-chevron-circle-right"></i> Salida Almacen</a></li>
                  <li><a class="treeview-item" href="inv_analisis_de_consumo.html"><i class="icon fa fa-chevron-circle-right"></i> Analisis De Consumo</a></li>
                  <li><a class="treeview-item" href="inv_listado_consumos_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Consumos ODS</a></li>
                  <li><a class="treeview-item" href="inv_stock_cables.html"><i class="icon fa fa-chevron-circle-right"></i> Stock Cables</a></li>
                  <li><a class="treeview-item" href="inv_stock_seriales.html"><i class="icon fa fa-chevron-circle-right"></i> Stock Seriales</a></li>
                  <li><a class="treeview-item" href="inv_material_terreno.html"><i class="icon fa fa-chevron-circle-right"></i> Material Terreno</a></li>
                  <li><a class="treeview-item" href="inv_seriales_terreno.html"><i class="icon fa fa-chevron-circle-right"></i> Seriales Terreno</a></li>
                  <li><a class="treeview-item" href="inv_listado_movimientos_almagran.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Movimientos Almagran</a></li>
                  <li><a class="treeview-item" href="inv_listado_consumos_almagran.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Consumos Almagran</a></li>
            </ul>
          </li><!--fin de menu de inventario-->
          <!--menu personal-->
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-users"></i><span class="app-menu__label">Personal</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
          <ul class="treeview-menu">
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Utilidades</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="per_util_importar_personal.html"><i class="icon fa fa-chevron-circle-right"></i> Importar Personal</a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="per_personal.html"><i class="icon fa fa-chevron-circle-right"></i> Personal</a></li>
          <li><a class="treeview-item" href="per_cargos.html"><i class="icon fa fa-chevron-circle-right"></i> Cargos</a></li>
          <li><a class="treeview-item" href="per_tipo_cuadrillas.html"><i class="icon fa fa-chevron-circle-right"></i> Tipo Cuadrillas</a></li>
          <li><a class="treeview-item" href="per_conformacion_cuadrillas.html"><i class="icon fa fa-chevron-circle-right"></i> Conformación Cuadrillas</a></li>
          <li><a class="treeview-item" href="per_registro_supervisores.html"><i class="icon fa fa-chevron-circle-right"></i> Registro Supervisores</a></li>
          <li><a class="treeview-item" href="per_asignacion_tecnico.html"><i class="icon fa fa-chevron-circle-right"></i> Asignación Técnicos</a></li>
          </ul>
          </li><!--fin menú personal-->
          <!--menu utilidades-->
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-upload"></i><span class="app-menu__label">Utilidades</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
          <ul class="treeview-menu">
          <li><a class="treeview-item" href="utilidades_impor_archiv.html"><i class="icon fa fa-chevron-circle-right"></i> Importar Archivos</a></li>
          </ul>
          </li><!--fin menú utilidades-->
          <!--menu ods-->
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-clipboard"></i><span class="app-menu__label"> ODS</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
          <ul class="treeview-menu">
          <li><a class="treeview-item" href="#" data-toggle="treeview-item"><i class="icon fa fa-folder-open fa-lg"></i><h6> ODS VPI</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="ods_carga_archivo_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Carga Archivos ODS</a></li>
          <li><a class="treeview-item" href="ods_impresion_formatos.html"><i class="icon fa fa-chevron-circle-right"></i> Impresión Formatos</a></li>
          <li><a class="treeview-item" href="ods_impresion_agenda.html"><i class="icon fa fa-chevron-circle-right"></i> Impresión Agenda</a></li>
          <li><a class="treeview-item" href="ods_asignar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Asignar ODS</a></li>
          <li><a class="treeview-item" href="ods_asignar_ods_masivo.html"><i class="icon fa fa-chevron-circle-right"></i> Asignar ODS Masivo</a></li>
          <li><a class="treeview-item" href="ods_atender_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Atender ODS</a></li>
          <li><a class="treeview-item" href="ods_atender_ods_manual.html"><i class="icon fa fa-chevron-circle-right"></i> Atender ODS Manual</a></li>
          <li><a class="treeview-item" href="ods_actualizar_carga_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar Carga ODS</a></li>
          <li><a class="treeview-item" href="ods_actualizar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar ODS</a></li>
          <li><a class="treeview-item" href="ods_cambio_familia_ps.html"><i class="icon fa fa-chevron-circle-right"></i> Cambio Familia PS</a></li>
          <li><a class="treeview-item" href="ods_consultar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Consultar ODS</a></li>
          <li><a class="treeview-item" href="ods_listado_ods_atendidas.html"><i class="icon fa fa-chevron-circle-right"></i> Listado ODS Atendidas</a></li>
          <li><a class="treeview-item" href="ods_listado_consumo_material.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Consumo Material</a></li>
          <li><a class="treeview-item" href="ods_listado_retiros_material.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Retiros Material</a></li>
          <li><a class="treeview-item" href="ods_listado_pendientes.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Pendientes</a></li>
          <li><a class="treeview-item" href="ods_listado_cambio_vias_lb.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Cambio Vias LB</a></li>
          <li><a class="treeview-item" href="ods_listado_quiebres.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Quiebres</a></li>
          <li><a class="treeview-item" href="ods_zonificar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Zonificar ODS</a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> ODS SOL TEC</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="sol_tec_carga_archivo_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Carga Archivo ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_asignar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Asignar ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_asignar_ods_masivo.html"><i class="icon fa fa-chevron-circle-right"></i> Asignar ODS Masivo</a></li>
          <li><a class="treeview-item" href="sol_tec_impresion_formatos.html"><i class="icon fa fa-chevron-circle-right"></i> Impresión Formatos</a></li>
          <li><a class="treeview-item" href="sol_tec_atender_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Atender ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_actualizar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_consultar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Consultar ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_atender_ods_manual.html"><i class="icon fa fa-chevron-circle-right"></i> Atender ODS Manual</a></li>
          <li><a class="treeview-item" href="sol_tec_actualizar_carga_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar Carga ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_legalizar_ods_@tiempo.html"><i class="icon fa fa-chevron-circle-right"></i> Legalizar ODS @Tiempo</a></li>
          <li><a class="treeview-item" href="sol_tec_consulta_bandeja_leg.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Bandeja Leg</a></li>
          <li><a class="treeview-item" href="sol_tec_listado_ods_atendidas.html"><i class="icon fa fa-chevron-circle-right"></i> Listado ODS Atendidas</a></li>
          <li><a class="treeview-item" href="sol_tec_listado_reiteradas.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Reiteradas</a></li>
          <li><a class="treeview-item" href="sol_tec_listado_pendientes.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Pendientes</a></li>
          <li><a class="treeview-item" href="sol_listado_cambio_vias_lb.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Cambio Vias LB</a></li>
          <li><a class="treeview-item" href="sol_tec_codigos_legalizacion.html"><i class="icon fa fa-chevron-circle-right"></i> Códigos Legalización</a></li>
          <li><a class="treeview-item" href="sol_tec_listado_consumo_material.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Consumo Material</a></li>
          <li><a class="treeview-item" href="sol_tec_listado_retiros_material.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Retiros Material</a></li>
          <li><a class="treeview-item" href="sol_tec_zonificar_ods_st.html"><i class="icon fa fa-chevron-circle-right"></i> Zonificar ODS ST</a></li>
          <li><a class="treeview-item" href="sol_tec_consulta_bandeja_leg.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta Bandeja Leg</a></li>
          <li><a class="treeview-item" href="sol_tec_transferir_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Transferir ODS</a></li>
          <li><a class="treeview-item" href="sol_tec_transferencia_masiva.html"><i class="icon fa fa-chevron-circle-right"></i> Transferencia Masiva</a></li>
          <li><a class="treeview-item" href="sol_tec_reinyectar.html"><i class="icon fa fa-chevron-circle-right"></i> Reinyectar</a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> ODS OT</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="ot_proyectos.html"><i class="icon fa fa-chevron-circle-right"></i> Proyectos</a></li>
          <li><a class="treeview-item" href="ot_ingresar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Ingresar ODS</a></li>
          <li><a class="treeview-item" href="ot_actualizar_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Actualizar ODS</a></li>
          <li><a class="treeview-item" href="ot_consulta_ods.html"><i class="icon fa fa-chevron-circle-right"></i> Consulta ODS</a></li>
          <li><a class="treeview-item" href="ot_listado_ods_atendidas.html"><i class="icon fa fa-chevron-circle-right"></i> Listado ODS Atendidas</a></li>
          <li><a class="treeview-item" href="ot_listado_consumo_material.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Consumo Material</a></li>
          <li><a class="treeview-item" href="ot_listado_retiro_material.html"><i class="icon fa fa-chevron-circle-right"></i> Listado Retiró Material</a></li>
          <li><a class="treeview-item" href="ot_liquidacion.html"><i class="icon fa fa-chevron-circle-right"></i> Liquidación</a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Utilidades</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="ods_atender_masivo_sol_tec.html"><i class="icon fa fa-chevron-circle-right"></i> Atender Masivo SOL TEC</a></li>
          <li><a class="treeview-item" href="ods_eliminar_masivo_sol_tec.html"><i class="icon fa fa-chevron-circle-right"></i> Eliminar Masivo SOL TEC</a></li>
          <li><a class="treeview-item" href="ods_eliminar_masivo_vpi.html"><i class="icon fa fa-chevron-circle-right"></i> Eliminar Masivo VPI</a></li>
          <li><a class="treeview-item" href="ods_atender_masivo_vpi.html"><i class="icon fa fa-chevron-circle-right"></i> Atender Masivo VPI</a></li>
          <li><a class="treeview-item" href="ods_carga_archivo_cierres.html"><i class="icon fa fa-chevron-circle-right"></i> Carga Archivos Cierre</a></li>
          <li><a class="treeview-item" href="ods_carga_archivo_consumos.html"><i class="icon fa fa-chevron-circle-right"></i> Carga Archivos Consumo</a></li>
          <li><a class="treeview-item" href="ods_carga_archivo_pendientes.html"><i class="icon fa fa-chevron-circle-right"></i> Carga Archivos Pendientes</a></li>
          <li><a class="treeview-item" href="ods-aplicar_consumos.html"><i class="icon fa fa-chevron-circle-right"></i> Aplicar Consumo ODS</a></li>
          <li><a class="treeview-item" href="ods_subir_pendientes_toa.html"><i class="icon fa fa-chevron-circle-right"></i> Subir Pendientes TOA</a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Estadistica</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="ods_analisis_reiteradas.html"><i class="icon fa fa-chevron-circle-right"></i> Análisis Reiteradas</a></li>
          <li><a class="treeview-item" href="ods_analisis_avarias_infancia.html"><i class="icon fa fa-chevron-circle-right"></i> Análisis Avarias Infancia</a></li>
          <li><a class="treeview-item" href="ods_informe_estela.html"><i class="icon fa fa-chevron-circle-right"></i> Informe ESTELA</a></li>
          </ul>
          </li><!--fin menú ods-->
          <!--menu admom-->
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-unlock-alt"></i><span class="app-menu__label">Admon</span><i class="treeview-indicator fa fa-angle-right fa-lg"></i></a>
          <ul class="treeview-menu">
          <li><a class="treeview-item" href="perfiles.html"><i class="icon fa fa-chevron-circle-right"></i> Perfiles</a></li>
          <li><a class="treeview-item" href="usuarios.html"><i class="icon fa fa-chevron-circle-right"></i> Usuario</a></li>
          <li><a class="treeview-item" href="datos_empresa.html"><i class="icon fa fa-chevron-circle-right"></i> Datos Empresa</a></li>
          <li><a class="treeview-item" href="opciones_correo_web.html"><i class="icon fa fa-chevron-circle-right"></i> Opciones Correo y Web</a></li>
          <li><a class="treeview-item" href="ejecutar_prog.html"><i class="icon fa fa-chevron-circle-right"></i> Ejecutar Prog</a></li>
          <li><a class="treeview-item" href="aplicar_consumos.html"><i class="icon fa fa-chevron-circle-right"></i> Aplicar Consumo</a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="#"><i class="icon fa fa-folder-open fa-lg"></i><h6> Utilidades SQL</h6></a></li>
          <div class="dropdown-divider"></div>
          <li><a class="treeview-item" href="admon_sql_query_editor.html"><i class="icon fa fa-chevron-circle-right"></i> SQL Query Editor</a></li>
          <li><a class="treeview-item" href="admon_sql_dump_export.html"><i class="icon fa fa-chevron-circle-right"></i> SQL Dump Export</a></li>
          </ul>
          </li><!--fin menu admon-->
          </ul>
          </aside>

          <div class="container-fluid">
              <div class="row flex-lg-nowrap">


                  <div class="d-none d-lg-block col-sm-2 bd-toc">
                      <ul class="navmenu">
                        <li class="app-menu__label treeview"><a class="nav-link app-menu__item" href="#cerrar" onclick="myFunction()">
                            Cerrar session actual</a></li>
                        <li class="app-menu__label treeview"><a class="nav-link app-menu__item" href="#cambio" onclick="myFunction()">
                            Cambio contraseña</a></li>
                        <li class="app-menu__label treeview"><a class="nav-link app-menu__item" href="#salir" onclick="myFunction()">
                            Salir</a></li>
                      </ul>
                    </div>

                  <main class="app-content" role="main">
                      <div id="cerrar" class="app-title">
                          <div>
                            <h1><i class="fa fa-file-text"></i> Opciones</h1>
                            <p>Salir, cerrar sesión actual y cambiar contraseña en SISCOS</p>
                          </div>
                          <div class="bs-component">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Opciones</li>
                            <li class="breadcrumb-item"><a href="configuracion.html">Configuración</a></li>
                          </ol>
                          </div>
                        </div>
    <!--<div id="cerrar " class="content" style="height: 477px; margin-right:-77px; margin-left:-53px; overflow: scroll;">-->
      <div class="row">
          <div class="col-md-12">
            <div class="container-fluid bg-trans" style="padding-top:70px;padding-bottom:30px">
              <a href="#cerrar"></a>
              <h1 class="tile-title">Cerrar sesión actual</h1>
              <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
              <!--para insertar las imagenes-->
  <a class="thumbnail" href="#thumb"><button class="btn btn-primary w3-block" type="button">
    <span><img src="imagenes/cerrar.png" class="w3-animate-zoom rounded"></span></button></a>
              <!--fin de imagenes-->
            </div>
                <div id="cambio" class="container-fluid bg-trans" style="padding-top:70px;padding-bottom:30px">
                  <a href="#cambio"></a>
                  <h1 class="tile-title">Cambio contraseña</h1>
                  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
      </div>

                    <div id="salir" class="container-fluid bg-trans" style="padding-top:70px; padding-bottom:30px">
                      <a href="#salir"></a>
                      <h1 class="tile-title">Salir</h1>
                      <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          </div>
                  </div>
                </div>
              </div>
               </main>
                </div>
                </div>
    <!-- JavaScript Colocado al final del documento para que las páginas se carguen más rápido -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-slim.min.js"><\/script>')</script>
    <!-- Essential javascripts for application to work-->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <!-- The javascript plugin to display page loading on top-->
    <script src="js/plugins/pace.min.js"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="js/plugins/chart.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Page specific javascripts-->
    <script>
        $('.bs-component [data-toggle="popover"]').popover();
        $('.bs-component [data-toggle="tooltip"]').tooltip();
      </script>
      <!--scrooll efecto smooth para el id-->
      <script>
          function myFunction() {
            document.documentElement.style.scrollBehavior = "smooth";
          }
          </script>
      <!--impedir que copien el codigo de la pagina-->
    <script language="Javascript">
      function disableselect(e){
      return false
      }
      function reEnable(){
      return true
      }
      document.onselectstart=new Function ("return false")
      if (window.sidebar){
      document.onmousedown=disableselect
      document.onclick=reEnable
      }
      // End -->
      </script>
   </body>
   <!--para inhabilitar el boton derecho en la pagina-->
   <Script language=JavaScript>
      function right(e) {
      if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2)){
      alert("Esta pagina es privada.");
      return false;
      }
      else if (navigator.appName == 'Microsoft Internet Explorer' &&
      (event.button == 2 || event.button == 3)) {
      alert("Esta pagina es privada.");
      return false;
      }
      return true;
      }
      document.onmousedown=right;
      if (document.layers) window.captureEvents(Event.MOUSEDOWN);
      window.onmousedown=right;
      </script>
</html>
