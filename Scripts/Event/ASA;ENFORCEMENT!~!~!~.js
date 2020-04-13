if (!matches(appTypeArray[1], "Action Order"))
{
	scheduleInspection("Initial Inspection", 14, currentUserID);
}
else
{
	scheduleInspection("Initial Investigation", 1);
	//assign new cap
	var gisInspector = getGISInfo("WINSALEM", "GISADMIN.Code_Enforcement_Territories", "NCO");
	var accelaInspector = lookup("WINSALEM_SETTINGS_GIS_INSPECTORS", gisInspector);
	if (accelaInspector)
		assignCap(accelaInspector);	
}
//update GIS info
updateGISCapInfo();