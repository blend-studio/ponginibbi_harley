/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6412917Z
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
/// Etichette associate al veicolo
/// </summary>
/// <remarks>
/// <para>Il dealer può utilizzare questa funzionalità per contrassegnare i veicoli.</para>
/// <para>A partire da: 2023-05-23</para>
/// </remarks>
public class Vehicles_Tags
{
	/// <summary>
	/// Codice dell'etichetta
	/// </summary>
	public string Code { get; set; }

	/// <summary>
	/// ID elemento
	/// </summary>
	public string ItemId { get; set; }

	/// <summary>
	/// Descrizione dell'etichetta
	/// </summary>
	public string? Label { get; set; }
}
