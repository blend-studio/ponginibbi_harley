/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6408295Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Dati relativi all'assicurazione
/// </summary>
/// <remarks>
/// <para>A partire da: 2021-07-14</para>
/// </remarks>
public class Vehicles_Insurance
{
	/// <summary>
	/// Nome agenzia assicurativa
	/// </summary>
	public string? AgencyName { get; set; }

	/// <summary>
	/// Provvigione per l'agente che ha venduto l'assicurazione
	/// </summary>
	public double? Commission { get; set; }

	/// <summary>
	/// Numero del contratto di assicurazione
	/// </summary>
	public int? ContractCode { get; set; }

	/// <summary>
	/// Data del contratto di assicurazione
	/// </summary>
	public DateTime? ContractDate { get; set; }

	/// <summary>
	/// Costo
	/// </summary>
	public double? Cost { get; set; }

	/// <summary>
	/// Descrizione
	/// </summary>
	public string? Description { get; set; }

	/// <summary>
	/// Durata dell'assicurazione in mesi
	/// </summary>
	public int? Duration { get; set; }

	/// <summary>
	/// Data di scadenza dell'assicurazione
	/// </summary>
	public DateTime? ExpirationDate { get; set; }

	/// <summary>
	/// Premio assicurativo
	/// </summary>
	public double? Premium { get; set; }

	/// <summary>
	/// Tipo assicurazione
	/// </summary>
	public string? Type { get; set; }

	/// <summary>
	/// Valore assicurato
	/// </summary>
	public double? Value { get; set; }
}
