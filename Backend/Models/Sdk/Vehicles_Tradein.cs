/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6413153Z
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
/// Dati del veicolo che ha generato la permuta
/// </summary>
/// <remarks>
/// <para>A partire da: 2025-04-07</para>
/// </remarks>
public class Vehicles_Tradein
{
	/// <summary>
	/// Codice marca
	/// </summary>
	/// <remarks>
	/// <para>Codice associato a questa marca</para>
	/// </remarks>
	public string BrandCode { get; set; }

	/// <summary>
	/// Codice ordine di fabbrica
	/// </summary>
	/// <remarks>
	/// <para>Codice ordine di fabbrica associato al veicolo</para>
	/// </remarks>
	public string? FactoryCode { get; set; }

	/// <summary>
	/// Codice ordine commerciale
	/// </summary>
	/// <remarks>
	/// <para>Codice ordine commerciale associato al veicolo</para>
	/// </remarks>
	public string? OrderCode { get; set; }

	/// <summary>
	/// Targa
	/// </summary>
	/// <remarks>
	/// <para>Targa del veicolo associato alla permuta</para>
	/// </remarks>
	public string Plate { get; set; }

	/// <summary>
	/// Vid del veicolo associato alla permuta
	/// </summary>
	public string TradeInVid { get; set; }

	/// <summary>
	/// Nr. di telaio
	/// </summary>
	public string Vin { get; set; }
}
